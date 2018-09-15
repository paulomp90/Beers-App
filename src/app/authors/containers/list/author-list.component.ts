import { Component, OnInit } from '@angular/core';
import { IAuthorsService } from '../../../api/interfaces/iauthor';

@Component({
    selector: 'app-author-list',
    templateUrl: 'author-list.component.html'
})

export class AuthorListComponent implements OnInit {

    public authors: any;

    constructor(private authorService: IAuthorsService) { }

    ngOnInit() {
        this.authors = this.authorService.getAuthors('dan', 'brown');
    }
}
