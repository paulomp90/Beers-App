import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable({
    providedIn: 'root'
})

export class LoadingInterceptorService implements HttpInterceptor {

    constructor(private loadingService: LoadingService) { }

    /**
     * Intercepts all http request and apply loading spinner
     * Hides the loading spinner when next.handle return the response or if an error occurs
     */
    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.loadingService.show();

        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    this.loadingService.hide();
                }
            },
            (err: any) => {
                this.loadingService.hide();
            })
        );
    }
}
