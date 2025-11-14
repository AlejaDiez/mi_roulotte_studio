import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { Post, PostPreview } from "@models/post";
import { PostService } from "@services/posts";

export const postResolver: ResolveFn<PostPreview[]> = (_, __) => inject(PostService).getPosts();

export const editPostResolver: ResolveFn<Post> = (route: ActivatedRouteSnapshot, _) =>
    inject(PostService).getPost(route.params["id"]);
