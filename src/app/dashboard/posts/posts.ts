import { Component, input, InputSignal } from "@angular/core";
import { PostPreviewComponent } from "@components/post_preview/post_preview";
import { PostPreview } from "@models/post";

@Component({
    selector: "section-posts",
    imports: [PostPreviewComponent],
    templateUrl: "posts.html",
    host: {
        class: "flex h-full w-full flex-col items-start justify-start overflow-hidden"
    }
})
export class PostsSection {
    readonly posts: InputSignal<PostPreview[]> = input.required<PostPreview[]>();
}
