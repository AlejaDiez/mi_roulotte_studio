import { Component } from "@angular/core";
import { RouterLinkActive, RouterLinkWithHref, RouterOutlet } from "@angular/router";

@Component({
    selector: "app-dashboard",
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
export class Dashboard {}
