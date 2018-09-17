import { Component  } from '@angular/core';
import { IBeerService } from '../../../api/interfaces/ibeer';
import { Observable } from 'rxjs';

@Component({
    selector: 'beer-general',
    templateUrl: 'beer-general.component.html'
})

export class BeerGeneralComponent {

    public beersList: Observable<any>;

    constructor(
        private beerService: IBeerService
    ) { }

    /**
     * Request beer information to api
     * @param beerRequest beer form information with ingredient string
     */
    private requestBeerData(beerRequest: any) {
        this.beersList = this.beerService.getBeerByIngredient(beerRequest.ingredient);
    }
}
