import { CommonModule } from "@angular/common";
import { Component, inject, input, InputSignal } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
    private readonly router: Router = inject(Router);
    private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    readonly data: InputSignal<PostPreview> = input.required<PostPreview>();

    view() {
        window.open(this.data().url, "_blank");
    }

    edit() {
        this.router.navigate(["edit", this.data().id], {
            relativeTo: this.activatedRoute
        });
    }

    delete() {}
}
