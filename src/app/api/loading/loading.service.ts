import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingState } from './loading.model';

@Injectable({
    providedIn: 'root'
})

export class LoadingService {

    private loadingSubject = new Subject<LoadingState>();
    public loadingState = this.loadingSubject.asObservable();

    // Change state of the loading spinner, 'next' sends the message to observable to change loaging behaviour
    /**
     * Show loading spinner
     */
    public show(): void {
        this.loadingSubject.next(<LoadingState>{ show: true });
    }

    /**
     * Hide loading spinner
     */
    public hide(): void {
        this.loadingSubject.next(<LoadingState>{ show: false });
    }
}