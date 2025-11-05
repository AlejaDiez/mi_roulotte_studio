import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "@env";
import { User } from "@models/user";
import { catchError, Observable, of, ReplaySubject, switchMap, tap } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    private readonly http: HttpClient = inject(HttpClient);
    private readonly _user: ReplaySubject<User | null> = new ReplaySubject<User | null>(1);
    public readonly user = this._user.asObservable();

    constructor() {
        this.http
            .get<User>(`${environment.API_HOST}/auth/profile`)
            .pipe(catchError(() => of(null)))
            .subscribe((val) => this._user.next(val));
    }

    login({ email, password }: { email: string; password: string }): Observable<User | null> {
        return this.http
            .post(`${environment.API_HOST}/auth/login`, { email, password, useCookies: true })
            .pipe(
                switchMap(() => this.http.get<User>(`${environment.API_HOST}/auth/profile`)),
                catchError(() => of(null)),
                tap((val) => this._user.next(val))
            );
    }

    logout(): Observable<void> {
        return this.http
            .delete<void>(`${environment.API_HOST}/auth/logout`)
            .pipe(tap(() => this._user.next(null)));
    }
}
