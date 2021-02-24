import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  constructor(private http: HttpClient, private router: Router) {}

   public get(url: string, params?: HttpParams| {[param: string]: string | string[]}): Observable<any> {
        return this.http.get(url, { params } ).pipe(
            switchMap((result) => of(result)),
            catchError((err) => {
                return err;
            })
        );
    }

    public post(url: string, body: any, showToast=true, params?: HttpParams| {[param: string]: string | string[]}): Observable<any> {
        return this.http.post(url, body, { params } ).pipe(
            switchMap((result) => {
                return of(result);
            }),
            catchError((err) => {
                return err;
            })
        )
    }

    public put(url: string, body: any, params?: HttpParams| {[param: string]: string | string[]}): Observable<any> {
        return this.http.put(url, body, { params } ).pipe(
            switchMap((result) => {
                return of(result);
            }),
            catchError((err) => {
                return err;
            })
        )
    }




}
