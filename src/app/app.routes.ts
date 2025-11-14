import { Routes } from "@angular/router";
import { authGuard, guestGuard } from "@guards/auth";
import { editPostResolver, postResolver } from "@resolvers/post";

export const routes: Routes = [
    {
        path: "",
        canActivate: [authGuard],
        loadComponent: () => import("./dashboard/dashboard").then((m) => m.DashboardPage),
        children: [
            {
                path: "analytics",
                loadComponent: () =>
                    import("./dashboard/analytics/analytics").then((m) => m.AnalyticsSection)
            },
            {
                path: "comments",
                loadComponent: () =>
                    import("./dashboard/comments/comments").then((m) => m.CommentsSection)
            },
            {
                path: "gallery",
                loadComponent: () =>
                    import("./dashboard/gallery/gallery").then((m) => m.GallerySection)
            },
            {
                path: "",
                loadComponent: () => import("./dashboard/home/home").then((m) => m.HomeSection)
            },
            {
                path: "posts",
                children: [
                    {
                        path: "",
                        resolve: { posts: postResolver },
                        loadComponent: () =>
                            import("./dashboard/posts/posts").then((m) => m.PostsSection)
                    },
                    {
                        path: "edit/:id",
                        resolve: { post: editPostResolver },
                        loadComponent: () =>
                            import("./dashboard/posts/edit/edit").then((m) => m.EditPostSection)
                    }
                ]
            },
            {
                path: "settings",
                loadComponent: () =>
                    import("./dashboard/settings/settings").then((m) => m.SettingsSection)
            }
        ]
    },
    {
        path: "login",
        canActivate: [guestGuard],
        loadComponent: () => import("./login/login").then((m) => m.LoginPage)
    },
    { path: "**", redirectTo: "", pathMatch: "full" }
];
