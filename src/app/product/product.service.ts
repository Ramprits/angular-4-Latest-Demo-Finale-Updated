import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:no-unused-variable
import { IProduct } from './product.module';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
    private baseURL = 'app/common/product.json';
    constructor(private http: Http) { }

    GetProducts(): Observable<IProduct[]> {
        return this.http.get(this.baseURL)
            .map((res: Response) => {
                return <IProduct[]>res.json();
            })
            .catch(this.handleError);
    }
    getProduct(ProductID: number): Observable<IProduct> {
        return this.http.get(this.baseURL + '/' + ProductID)
            .map((res: Response) => {
                return <IProduct>res.json();
            })
            .catch(this.handleError);
    }
    private handleError(errr: Response) {
        return Observable.throw(errr.statusText);
    }

}