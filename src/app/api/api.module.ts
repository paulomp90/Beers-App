import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptorService } from './loading/loading-interceptor.service';

import { BeerService } from './classes/beer.service';
import { IBeerService } from './interfaces/ibeer';

import { LoadingComponent } from './loading/component/loading.component';
import { LoadingService } from './loading/loading.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        HttpClientModule
    ],
    exports: [
        LoadingComponent
    ],
    declarations: [
        LoadingComponent
    ],
    providers: [
        LoadingService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptorService,
            multi: true
        }
    ]
})

export class ApiModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [
                { provide: IBeerService, useClass: BeerService }
            ]
        };
    }
}
