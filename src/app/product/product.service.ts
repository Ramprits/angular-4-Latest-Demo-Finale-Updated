import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Subject, Observable } from 'rxjs/RX';
import { IProduct } from "./product.module";

@Injectable()
export class ProductService {
    private baseURL = "app/common/product.json"
    constructor(private http: Http) { }

    GetProducts(): Observable<IProduct[]> {
        return this.http.get(this.baseURL)
            .map((res: Response) => {
                return <IProduct[]>res.json();
            })
            .catch(this.handleError);
    }
    getProduct(ProductID: number): Observable<IProduct> {
        return this.http.get(this.baseURL + "/" + ProductID)
            .map((res: Response) => {
                return <IProduct>res.json();
            })
            .catch(this.handleError);
    }
    private handleError(errr: Response) {
        return Observable.throw(errr.statusText);
    }

}