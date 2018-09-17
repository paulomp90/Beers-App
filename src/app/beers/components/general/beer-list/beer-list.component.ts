import { Component, Input } from '@angular/core';
import { BeerModelUI } from '../../../models/beer.models';

@Component({
    selector: 'beer-list',
    templateUrl: 'beer-list.component.html'
})

export class BeerListComponent {

    @Input() public beersList: BeerModelUI[];
}
