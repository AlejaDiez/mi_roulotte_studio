import { Component, HostBinding, inject, Signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { Router, RouterLinkActive, RouterLinkWithHref, RouterOutlet } from "@angular/router";
import { User } from "@models/user";
import { AuthService } from "@services/auth";

@Component({
    selector: "page-dashboard",
    imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
    templateUrl: "dashboard.html",
    styles: `
        ::ng-deep body {
            overflow: hidden;
        }

        :host[data-sidebar-sate="collapsed"] {
            .sidebar {
                transform: translateZ(0);
                clip-path: inset(0 100% 0 0);
                pointer-events: none;
            }

            .main-content {
                padding-left: 0;

                ::ng-deep .adaptive-padding {
                    padding-inline: var(--space-x);
                }
            }
        }

        .main-content {
            transition-duration: 300ms;
            transition-property: padding;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

            ::ng-deep .adaptive-padding {
                transition-duration: 300ms;
                transition-property: padding;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                padding-inline: var(--space-view);
            }
        }
    `,
    host: {
        class: "relative flex h-screen w-screen"
    }
})
export class DashboardPage {
    private readonly router: Router = inject(Router);
    private readonly auth: AuthService = inject(AuthService);
    readonly user: Signal<User | null | undefined> = toSignal(this.auth.user);
    @HostBinding("attr.data-sidebar-sate")
    sidebarState: string = "expanded";

    togglePanel(state: boolean) {
        this.sidebarState = state ? "expanded" : "collapsed";
    }

    logout() {
        this.auth.logout().subscribe(() => {
            this.router.navigateByUrl("/login");
        });
    }
}
