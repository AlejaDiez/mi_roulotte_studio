import { CommonModule } from "@angular/common";
import { Component, input, InputSignal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Post } from "@models/post";

@Component({
    selector: "section-edit-post",
    imports: [CommonModule, RouterLink],
    templateUrl: "edit.html",
    host: {
        class: "flex h-full w-full flex-col items-start justify-start overflow-hidden"
    }
})
export class EditPostSection {
    readonly post: InputSignal<Post> = input.required<Post>();
}
