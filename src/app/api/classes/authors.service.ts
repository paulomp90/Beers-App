import { Injectable, Injector } from '@angular/core';
import { IAuthorsService } from '../interfaces/iauthor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthorsService implements IAuthorsService {

    constructor(private http: HttpClient) { }

    public getAuthors(firstName: string, lastName: string): Observable<any> {

        if (firstName && lastName) {
            return this.http.get('https://reststop.randomhouse.com/resources/authors?firstName=' + firstName + '&lastName=' + lastName );
        }
    }

    public getAuthorDetail(authorId: number): Observable<any> {
        return this.http.get('https://reststop.randomhouse.com/resources/authors/' + authorId + '/');
    }
}
