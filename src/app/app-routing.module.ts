import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeerGeneralComponent } from './beers/containers/general/beer-general.component';
import { BeerDetailComponent } from './beers/containers/detail/beer-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/general', pathMatch: 'full' },
    { path: 'general', component: BeerGeneralComponent },
    { path: 'detail/:id', component: BeerDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
