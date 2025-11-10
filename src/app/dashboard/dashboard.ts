import { Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { Router, RouterLinkActive, RouterLinkWithHref, RouterOutlet } from "@angular/router";
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
export class Dashboard {
    private readonly router: Router = inject(Router);
    private readonly auth: AuthService = inject(AuthService);
    readonly user = toSignal(this.auth.user);

    logout() {
        this.auth.logout().subscribe(() => {
            this.router.navigateByUrl("/login");
        });
    }
}
