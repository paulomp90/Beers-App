import { Observable } from 'rxjs';

export abstract class IAuthorsService {
    public abstract getAuthors(firstName: string, lastName: string): Observable<any>;

    public abstract getAuthorDetail(authorId: number): Observable<any>;
}
