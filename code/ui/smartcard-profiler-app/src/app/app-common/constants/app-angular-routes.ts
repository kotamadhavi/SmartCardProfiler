import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AppAngularRoutes {
  CUST_PROFILE_VIEW: string = "/masterdata/customer-profile-view";
  CARD_TRANSACTION_DETAILS_VIEW: string = "/transactions/card-transaction-details-view";

}
