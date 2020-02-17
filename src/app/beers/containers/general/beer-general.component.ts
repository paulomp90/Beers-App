import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs';
import { BeerModelUI, RequestBeerByIngredientModelUI } from '../../models/beer.models';
import { Store, select } from '@ngrx/store';
import * as BeerReducers from '../../reducers/beer.reducer';
import * as BeerActions from '../../actions/beer.actions';

@Component({
    selector: 'beer-general',
    templateUrl: 'beer-general.component.html',
    styleUrls: ['./beer-general.component.scss']
})

export class BeerGeneralComponent implements OnInit {

    public beersList$: Observable<BeerModelUI[]>;
    public lastSearchTerm$: Observable<string>;

    constructor(
        private store: Store<BeerReducers.IBeerState>
    ) {}

    ngOnInit() {
        this.beersList$ = this.store.pipe(select(BeerReducers.getBeerList));
        this.lastSearchTerm$ = this.store.pipe(select(BeerReducers.getLastSearchTerm));
    }

    /**
     * Request beer information to api
     * @param beerRequest beer form information with ingredient string
     */
    private requestBeerData(beerRequest: RequestBeerByIngredientModelUI): void {
        this.store.dispatch(BeerActions.GetBeerList(beerRequest));
    }
}
