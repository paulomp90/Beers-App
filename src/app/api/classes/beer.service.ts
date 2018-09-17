import { Injectable, } from '@angular/core';
import { IBeerService } from '../interfaces/ibeer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BeerService implements IBeerService {

    protected apiUrl = 'https://api.punkapi.com/v2/beers';

    constructor(private http: HttpClient) { }

    public getBeerByIngredient(ingredient: string): Observable<any> {
        return this.http.get(this.apiUrl + '?food=' + ingredient);
    }

    public getBeerById(id: number): Observable<any> {
        return this.http.get(this.apiUrl + '/' + id);
    }
}
