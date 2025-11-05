import { provideHttpClient, withInterceptors } from "@angular/common/http";
import {
    ApplicationConfig,
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection
} from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "@app/app.routes";
import { withCredentialsInterceptor } from "@interceptors/with_credentials";

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection(),
        provideRouter(routes),
        provideHttpClient(withInterceptors([withCredentialsInterceptor]))
    ]
};
