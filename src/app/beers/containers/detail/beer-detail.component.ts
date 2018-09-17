import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBeerService } from '../../../api/interfaces/ibeer';
import { Location } from '@angular/common';

@Component({
    selector: 'app-beer-detail',
    templateUrl: 'beer-detail.component.html'
})

export class BeerDetailComponent implements OnInit {

    private beerId: number;
    private beerInformation: any;

    constructor(
        private beerService: IBeerService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.beerId = Number(this.route.snapshot.paramMap.get('id'));
        console.log(this.beerId);
        this.beerInformation = this.beerService.getBeerById(this.beerId);
    }

    /**
     * Go to previous page
     */
    goBack(): void {
        this.location.back();
    }
}
