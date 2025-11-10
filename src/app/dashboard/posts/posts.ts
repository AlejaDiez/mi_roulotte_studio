import { Component, inject, Signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from "@angular/router";
import { PostPreviewComponent } from "@components/post_preview/post_preview";
import { PostPreview } from "@models/post";
import { map } from "rxjs";

@Component({
    selector: "section-posts",
    imports: [PostPreviewComponent],
    templateUrl: "posts.html",
    host: {
        class: "flex h-full w-full flex-col items-start justify-start overflow-hidden"
    }
})
export class Posts {
    private readonly route: ActivatedRoute = inject(ActivatedRoute);
    readonly posts: Signal<PostPreview[]> = toSignal(
        this.route.data.pipe(map(({ posts }) => posts))
    );
}
