import { Component, OnInit } from '@angular/core';
import { IAuthorsService } from '../../../api/interfaces/iauthor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-author-list',
    templateUrl: 'author-list.component.html'
})

export class AuthorListComponent implements OnInit {

    public authors: any;
    public requestForm: FormGroup;
    private submitted: Boolean = false;

    constructor(
        private authorService: IAuthorsService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        // this.authors = this.authorService.getAuthors('dan', 'brown');
        this.requestForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required]
        });
    }

    onSubmit() {
        this.submitted = true;

        this.authors = this.authorService.getAuthors(this.requestForm.value.firstName, this.requestForm.value.lastName);
    }
}
