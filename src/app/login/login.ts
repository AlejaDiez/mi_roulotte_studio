import { Component } from "@angular/core";

@Component({
    selector: "app-login",
    imports: [],
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
export class Login {}
