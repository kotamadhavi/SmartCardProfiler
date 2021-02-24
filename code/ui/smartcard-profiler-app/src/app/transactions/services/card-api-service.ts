import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppRoutes } from 'src/app/app-common/constants/app-routes-constants';
import { BaseApiService } from 'src/app/app-common/services/base-api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {

  constructor(private app_routes: AppRoutes, private baseApi: BaseApiService) { }

  public getAllCardTransactions() : Observable<any>{
    const url = `${this.app_routes.API_URL_CARD_TRANSACTIONS}`;
    return this.baseApi.get(url).pipe(
      map((res) => {
        return res['results'];
      })
    );

  }
}
