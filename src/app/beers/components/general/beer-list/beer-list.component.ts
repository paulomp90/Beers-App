import { Component, Input } from '@angular/core';

@Component({
    selector: 'beer-list',
    templateUrl: 'beer-list.component.html'
})

export class BeerListComponent {

    @Input() public beersList: any;
}
