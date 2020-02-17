import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { BeerModelUI } from '../../models/beer.models';

@Component({
    selector: 'beer-information',
    templateUrl: 'beer-information.component.html',
    styleUrls: ['./beer-information.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class BeerInformationComponent {

    @Input() public beerDetail: BeerModelUI;

    @Output() goBackEmitter: EventEmitter<any> = new EventEmitter();

    public goBack(): void {
        this.goBackEmitter.emit();
    }
}
