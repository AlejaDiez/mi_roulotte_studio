import { Component, inject, signal, Signal, WritableSignal } from "@angular/core";
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
    `,
    host: {
        class: "relative block h-screen w-screen"
    }
})
export class DashboardPage {
    private readonly router: Router = inject(Router);
    private readonly auth: AuthService = inject(AuthService);
    readonly user: Signal<User | null | undefined> = toSignal(this.auth.user);
    readonly panel: WritableSignal<boolean> = signal(true);

    togglePanel() {
        this.panel.update((value) => !value);
    }

    logout() {
        this.auth.logout().subscribe(() => {
            this.router.navigateByUrl("/login");
        });
    }
}
