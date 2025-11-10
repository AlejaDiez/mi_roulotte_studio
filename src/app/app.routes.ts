import { Routes } from "@angular/router";
import { authGuard, guestGuard } from "@guards/auth";
import { postResolver } from "@resolvers/post";

export const routes: Routes = [
    {
        path: "",
        canActivate: [authGuard],
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
                resolve: {
                    posts: postResolver
                },
                loadComponent: () => import("./dashboard/posts/posts").then((m) => m.Posts)
            },
            {
                path: "settings",
                loadComponent: () => import("./dashboard/settings/settings").then((m) => m.Settings)
            }
        ]
    },
    {
        path: "login",
        canActivate: [guestGuard],
        loadComponent: () => import("./login/login").then((m) => m.Login)
    },
    { path: "**", redirectTo: "", pathMatch: "full" }
];
