import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { PostPreview } from "@models/post";
import { PostService } from "@services/posts";

export const postResolver: ResolveFn<PostPreview[]> = (_, __) => inject(PostService).getPosts();
