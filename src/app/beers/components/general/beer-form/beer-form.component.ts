import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-beer-form',
    templateUrl: 'beer-form.component.html'
})

export class BeerFormComponent implements OnInit {

    public requestForm: FormGroup;

    @Output() public beerFormEmitter: EventEmitter<any> = new EventEmitter();

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.requestForm = this.formBuilder.group({
            ingredient: ['', Validators.required]
        });
    }

    onSubmitBeerForm() {
        this.beerFormEmitter.emit(this.requestForm.value);
    }
}