import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "@env";
import { PostPreview } from "@models/post";
import { map, Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class PostService {
    private readonly http: HttpClient = inject(HttpClient);

    getPosts(id?: string): Observable<PostPreview[]> {
        return this.http
            .get<PostPreview[]>(
                id
                    ? `${environment.API_HOST}/stages/${id}` // Return stages
                    : `${environment.API_HOST}/trips` // Return trips
            )
            .pipe(
                map((val) => val.map(({ date, ...rest }) => ({ ...rest, date: new Date(date) })))
            );
    }
}
