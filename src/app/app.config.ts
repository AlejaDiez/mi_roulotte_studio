import { registerLocaleData } from "@angular/common";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import localeEs from "@angular/common/locales/es";
import {
    ApplicationConfig,
    LOCALE_ID,
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection
} from "@angular/core";
import { provideRouter, withComponentInputBinding, withHashLocation } from "@angular/router";
import { routes } from "@app/app.routes";
import { withCredentialsInterceptor } from "@interceptors/with_credentials";

registerLocaleData(localeEs);
export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection(),
        provideRouter(routes, withComponentInputBinding(), withHashLocation()),
        provideHttpClient(withInterceptors([withCredentialsInterceptor])),
        { provide: LOCALE_ID, useValue: "es" }
    ]
};
