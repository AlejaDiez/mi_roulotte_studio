import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { PostPreview } from "@models/post";

@Component({
    selector: "post-preview",
    imports: [CommonModule],
    templateUrl: "post_preview.html",
    host: {
        class: "post-preview flex h-[168px] w-full flex-row gap-[calc(var(--space-view)/2)]"
    }
})
export class PostPreviewComponent {
    readonly data = input.required<PostPreview>();

    view() {
        window.open(this.data().url, "_blank");
    }

    edit() {}

    delete() {}
}
