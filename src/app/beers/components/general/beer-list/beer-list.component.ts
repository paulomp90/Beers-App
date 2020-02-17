import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BeerModelUI } from '../../../models/beer.models';

@Component({
    selector: 'beer-list',
    templateUrl: 'beer-list.component.html',
    styleUrls: ['./beer-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class BeerListComponent {
    @Input() public beersList: BeerModelUI[];
}
