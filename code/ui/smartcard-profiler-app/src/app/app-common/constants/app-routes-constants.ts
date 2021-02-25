import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AppRoutes {
  API_URL_CUSTOMERS: string = environment.API_CUST_BASE_URL + "/customer-profile/get_all_customers/";
  API_URL_CARD_TRANSACTIONS: string = environment.API_TRANSACTIOINS_BASE_URL + "/cards/get_all_card_transactions/";
  API_URL_CARD_TRAN_PREDICT_EVENT: string = environment.API_TRANSACTIOINS_BASE_URL + "/create-card-predict-event";

}
