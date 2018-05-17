import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

// Models
import { CompanyInfo } from 'src/app/models/companyInfo';
import { RootObject } from 'src/app/models/rootobject';
import { Rocket } from 'src/app/models/rocket';
import { Capsule } from 'src/app/models/capsule';
import { QueryStringOptions } from 'src/app/models/queryStringOption';

// 3rd tiers
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Launchpad } from 'src/app/models/launchpad';
import { Cap } from 'src/app/models/cap';
import { Core } from 'src/app/models/core';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {
  private baseUrl = 'https://api.spacexdata.com/v2';

  constructor(
    private http: HttpClient
  ) { }

  getCores = (params: QueryStringOptions = new QueryStringOptions()): Observable<Core[]> => {
    let httpParams = new HttpParams();
    Object.keys(params).map(key => {
      httpParams = httpParams.append(key, params[key]);
    });
    const requestEndpoint = this.baseUrl + '/parts/cores';
    return this.http.get<Core[]>(
              requestEndpoint,
              {params: httpParams}
              )
              .pipe(
                catchError(this.handleError)
              );
  }

  getCore = (query: string = ''): Observable<Core> => {
    let requestEndpoint = this.baseUrl + '/parts/cores';
    if (query) { requestEndpoint += '/' + query; }
    return this.http.get<Core>(requestEndpoint)
              .pipe(
                catchError(this.handleError)
              );
  }

  getCaps = (params: QueryStringOptions = new QueryStringOptions()): Observable<Cap[]> => {
    let httpParams = new HttpParams();
    Object.keys(params).map(key => {
      httpParams = httpParams.append(key, params[key]);
    });
    const requestEndpoint = this.baseUrl + '/parts/caps';
    return this.http.get<Cap[]>(
              requestEndpoint,
              {params: httpParams}
              )
              .pipe(
                catchError(this.handleError)
              );
  }

  getCap = (query: string = ''): Observable<Cap> => {
    let requestEndpoint = this.baseUrl + '/parts/caps';
    if (query) { requestEndpoint += '/' + query; }
    return this.http.get<Cap>(requestEndpoint)
              .pipe(
                catchError(this.handleError)
              );
  }

  getLaunchpads = (): Observable<Launchpad[]> => {
    const requestEndpoint = this.baseUrl + '/launchpads';
    return this.http.get<Launchpad[]>(requestEndpoint)
              .pipe(
                catchError(this.handleError)
              );
  }

  getLaunchpad = (query: string = ''): Observable<Launchpad> => {
    let requestEndpoint = this.baseUrl + '/launchpads';
    if (query) { requestEndpoint += '/' + query; }
    return this.http.get<Launchpad>(requestEndpoint)
              .pipe(
                catchError(this.handleError)
              );
  }

  getCapsules = (): Observable<Capsule[]> => {
    const requestEndpoint = this.baseUrl + '/capsules';
    return this.http.get<Capsule[]>(requestEndpoint)
              .pipe(
                catchError(this.handleError)
              );
  }

  getCapsule = (query: string = ''): Observable<Capsule> => {
    let requestEndpoint = this.baseUrl + '/capsules';
    if (query) { requestEndpoint += '/' + query; }
    return this.http.get<Capsule>(requestEndpoint)
              .pipe(
                catchError(this.handleError)
              );
  }

  getRockets = (): Observable<Rocket[]> => {
    const requestEndpoint = this.baseUrl + '/rockets';
    return this.http.get<Rocket[]>(requestEndpoint)
              .pipe(
                catchError(this.handleError)
              );
  }

  getRocket = (query: string = ''): Observable<Rocket> => {
    let requestEndpoint = this.baseUrl + '/rockets';
    if (query) { requestEndpoint += '/' + query; }
    return this.http.get<Rocket>(requestEndpoint)
              .pipe(
                catchError(this.handleError)
              );
  }

  getCompanyInfo = (): Observable<CompanyInfo> => {
    const requestEndpoint = this.baseUrl + '/info';
    return this.http.get<CompanyInfo>(requestEndpoint)
              .pipe(
                catchError(this.handleError)
              );
  }

  getLaunches = (endpoint: string = '', params: QueryStringOptions = new QueryStringOptions()): Observable<RootObject[]> => {
    let httpParams = new HttpParams();
    Object.keys(params).map(key => {
      httpParams = httpParams.append(key, params[key]);
    });
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
              {params: httpParams}
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
