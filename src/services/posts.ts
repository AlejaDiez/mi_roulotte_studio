import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "@env";
import { parsePost, Post, PostPreview } from "@models/post";
import { map, Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class PostService {
    private readonly http: HttpClient = inject(HttpClient);

    getPosts(id?: string): Observable<PostPreview[]> {
        return this.http
            .get<any[]>(
                id
                    ? `${environment.API_HOST}/stages/${id}` // Return stages
                    : `${environment.API_HOST}/trips` // Return trips
            )
            .pipe(map((val) => val.map((val) => parsePost(val) as PostPreview)));
    }

    getPost(...id: string[]): Observable<Post> {
        return this.http
            .get<any>(
                id.length > 1
                    ? `${environment.API_HOST}/trips/${id[0]}/stages/${id[1]}` // Return stage
                    : `${environment.API_HOST}/trips/${id[0]}` // Return trip
            )
            .pipe(map((val) => parsePost(val) as Post));
    }
}
