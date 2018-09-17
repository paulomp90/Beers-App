import { Observable } from 'rxjs';

export abstract class IBeerService {

    public abstract getBeerByIngredient(ingredient: string): Observable<any[]>;

    public abstract getBeerById(id: number): Observable<any>;
}
