import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../loading.service';
import { LoadingState } from '../loading.model';

@Component({
    selector: 'loading-spinner',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})

export class LoadingComponent implements OnInit, OnDestroy {

    public show = false;
    private subscription: Subscription;

    constructor(private loadingService: LoadingService) { }

    /**
     * Access loaging state information and save 'show' value
     */
    public ngOnInit() {
        this.subscription = this.loadingService.loadingState
        .subscribe((state: LoadingState) => {
            this.show = state.show;
        });
    }

    /**
     * Destroy subscription to observable
     */
    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}