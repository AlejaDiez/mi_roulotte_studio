import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "@services/auth";

@Component({
    selector: "app-login",
    imports: [ReactiveFormsModule],
    templateUrl: "login.html",
    styles: `
        ::ng-deep body {
            overflow: hidden;
        }
    `,
    host: {
        class: "relative block h-screen w-screen"
    }
})
export class Login {
    private readonly router: Router = inject(Router);
    private readonly auth: AuthService = inject(AuthService);
    readonly form = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/)
        ])
    });

    submit() {
        const { email, password } = this.form.value;

        this.auth.login({ email: email!, password: password! }).subscribe((val) => {
            if (val) this.router.navigateByUrl("/");
        });
    }
}
