import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {IProduct} from "../models/product";
import {catchError, delay, retry, tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {throwError} from "rxjs";
import {ErrorService} from "../products/error.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient,
              private errorService: ErrorService) {

  }

  products: IProduct[] = [];

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      // params: new HttpParams().append('limit', 5)
      params: new HttpParams({
        fromObject: {
          limit: 5

        }
      })
    }).pipe(
      // delay(200),
      retry(2),
      tap(product => this.products = product),
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(err: HttpErrorResponse) {
    this.errorService.handle(err.message)
    return throwError(() => err.message)
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>('https://fakestoreapi.com/products', product)
      .pipe(
        tap(prod => this.products.push(prod))
      )
  }

}
