import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { BeerService } from './classes/beer.service';
import { IBeerService } from './interfaces/ibeer';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        HttpClientModule
    ],
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
