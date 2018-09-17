import { Observable } from 'rxjs';
import { RequestBeerByIngredientModelUI, BeerModelUI, RequestBeerByIdModelUI } from '../../beers/models/beer.models';

export abstract class IBeerService {

    public abstract getBeerByIngredient(request: RequestBeerByIngredientModelUI): Observable<BeerModelUI[]>;

    public abstract getBeerById(request: RequestBeerByIdModelUI): Observable<BeerModelUI>;
}
