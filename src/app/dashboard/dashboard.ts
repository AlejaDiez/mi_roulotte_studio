import { Component } from "@angular/core";
import { RouterLinkActive, RouterLinkWithHref, RouterOutlet } from "@angular/router";

@Component({
    selector: "app-dashboard",
    imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
    templateUrl: "dashboard.html"
})
export class Dashboard {}
