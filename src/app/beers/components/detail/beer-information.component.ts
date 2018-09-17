import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-beer-information',
    templateUrl: 'beer-information.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class BeerInformationComponent implements OnChanges{
    @Input() public beerInformation: any = {};

    @Output() goBackEmitter: EventEmitter<any> = new EventEmitter();

    public ngOnChanges (changes: SimpleChanges) {
        if (changes.beerInformation.currentValue) {
            console.log(changes);
            this.beerInformation = changes.beerInformation.currentValue[0];
        }
    }
    /**
     * Emit event to parent to go to previous page
     */
    private goBack() {
        this.goBackEmitter.emit();
    }
}
