import { inject } from "@angular/core";
import { CanActivateFn, RedirectCommand, Router } from "@angular/router";
import { AuthService } from "@services/auth";
import { map } from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const auth = inject(AuthService);

    return auth.user.pipe(
        map((val) => {
            if (val) return true;
            else return new RedirectCommand(router.createUrlTree(["/login"]));
        })
    );
};

export const guestGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const auth = inject(AuthService);

    return auth.user.pipe(
        map((val) => {
            if (val) return new RedirectCommand(router.createUrlTree(["/"]));
            else return true;
        })
    );
};
