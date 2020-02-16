import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../../../services/beer.service';
import { Location } from '@angular/common';
import { BeerModelUI, RequestBeerByIdModelUI } from '../../models/beer.models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as BeerReducers from '../../reducers/beer.reducer';
import * as BeerActions from '../../actions/beer.actions';

@Component({
    selector: 'beer-detail',
    templateUrl: 'beer-detail.component.html'
})

export class BeerDetailComponent implements OnInit {

    public  beerDetail$: Observable<BeerModelUI>;
    private beer: RequestBeerByIdModelUI;

    constructor(
        private beerService: BeerService,
        private route: ActivatedRoute,
        private location: Location,
        private store: Store<BeerReducers.IBeerState>
    ) {}

    /**
     * Get id from url route and send request to get beer details
     */
    public ngOnInit(): void {
        this.beer = {
            Id: Number(this.route.snapshot.paramMap.get('id'))
        };
        this.beerDetail$ = this.store.select(BeerReducers.getBeerDetail)
        this.getBeerDetail()
    }

    private getBeerDetail() {
        this.store.dispatch(BeerActions.GetBeerDetail(this.beer))
    }

    public goBack(): void {
        this.location.back();
    }
}
