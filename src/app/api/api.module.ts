import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AuthorsService } from './classes/authors.service';
import { IAuthorsService } from './interfaces/iauthor';

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
                { provide: IAuthorsService, useClass: AuthorsService }
            ]
        };
    }
}
