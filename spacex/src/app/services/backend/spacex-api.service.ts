import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CompanyInfo } from 'src/app/models/companyInfo';
import { catchError } from 'rxjs/operators';
import { RootObject } from 'src/app/models/rootobject';
import { QueryStringOptions } from 'src/app/models/queryStringOption';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {
  private baseUrl = 'https://api.spacexdata.com/v2';

  constructor(
    private http: HttpClient
  ) { }

  getCompanyInfo = (): Observable<CompanyInfo> => {
    const requestEndpoint = this.baseUrl + '/info';
    return this.http.get<CompanyInfo>(requestEndpoint)
              .pipe(
                catchError(this.handleError)
              );
  }

  getLaunches = (endpoint: string = '', params = {}): Observable<RootObject[]> => {
    let requestEndpoint = this.baseUrl + '/launches/';
    switch (endpoint) {
      case 'latest':
        requestEndpoint += endpoint;
        break;
      case 'upcoming':
        requestEndpoint += endpoint;
        break;
      case 'all':
        requestEndpoint += endpoint;
        break;
    }
    return this.http.get<RootObject[]>(
              requestEndpoint,
              {params: params}
              )
              .pipe(
                catchError(this.handleError)
              );
  }

  private handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
