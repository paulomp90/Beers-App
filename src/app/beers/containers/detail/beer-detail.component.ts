import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBeerService } from '../../../api/interfaces/ibeer';
import { Location } from '@angular/common';
import { BeerModelUI, RequestBeerByIdModelUI } from '../../models/beer.models';
import { Observable } from 'rxjs';

@Component({
    selector: 'beer-detail',
    templateUrl: 'beer-detail.component.html'
})

export class BeerDetailComponent implements OnInit {

    private beer: RequestBeerByIdModelUI;
    private beerInformation: Observable<BeerModelUI>;

    constructor(
        private beerService: IBeerService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    /**
     * Get id from url route and send request to get beer details
     */
    public ngOnInit(): void {
        this.beer = {
            Id: Number(this.route.snapshot.paramMap.get('id'))
        };
        this.beerInformation = this.beerService.getBeerById(this.beer);
    }

    /**
     * Go to previous page
     */
    private goBack(): void {
        this.location.back();
    }
}
