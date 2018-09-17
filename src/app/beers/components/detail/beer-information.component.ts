import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { BeerModelUI } from '../../models/beer.models';

@Component({
    selector: 'beer-information',
    templateUrl: 'beer-information.component.html',
    styleUrls: ['./beer-information.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class BeerInformationComponent implements OnChanges{

    @Input() public beerInformation: BeerModelUI;

    @Output() goBackEmitter: EventEmitter<any> = new EventEmitter();

    /**
     * Verify if variable beerInformation has undergone any change in his data and update variable
     */
    public ngOnChanges (changes: SimpleChanges): void {
        if (changes.beerInformation.currentValue) {
            this.beerInformation = changes.beerInformation.currentValue[0];
        }
    }
    /**
     * Emit event to parent to go to previous page
     */
    private goBack(): void {
        this.goBackEmitter.emit();
    }
}
