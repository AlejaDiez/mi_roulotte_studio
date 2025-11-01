import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./dashboard/dashboard").then((m) => m.Dashboard),
        children: [
            {
                path: "analytics",
                loadComponent: () =>
                    import("./dashboard/analytics/analytics").then((m) => m.Analytics)
            },
            {
                path: "comments",
                loadComponent: () => import("./dashboard/comments/comments").then((m) => m.Comments)
            },
            {
                path: "gallery",
                loadComponent: () => import("./dashboard/gallery/gallery").then((m) => m.Gallery)
            },
            {
                path: "",
                loadComponent: () => import("./dashboard/home/home").then((m) => m.Home)
            },
            {
                path: "posts",
                loadComponent: () => import("./dashboard/posts/posts").then((m) => m.Posts)
            },
            {
                path: "settings",
                loadComponent: () => import("./dashboard/settings/settings").then((m) => m.Settings)
            }
        ]
    },
    { path: "**", redirectTo: "", pathMatch: "full" }
];
