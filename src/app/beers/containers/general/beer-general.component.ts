import { Component  } from '@angular/core';
import { IBeerService } from '../../../api/interfaces/ibeer';
import { Observable } from 'rxjs';
import { BeerModelUI, RequestBeerByIngredientModelUI } from '../../models/beer.models';

@Component({
    selector: 'beer-general',
    templateUrl: 'beer-general.component.html'
})

export class BeerGeneralComponent {

    public beersList: Observable<BeerModelUI[]>;

    constructor(
        private beerService: IBeerService
    ) { }

    /**
     * Request beer information to api
     * @param beerRequest beer form information with ingredient string
     */
    private requestBeerData(beerRequest: RequestBeerByIngredientModelUI): void {
        this.beersList = this.beerService.getBeerByIngredient(beerRequest);
    }
}
