import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AppRoutes {
  API_URL_CUSTOMERS: string = environment.API_CUST_BASE_URL + "/customer-profile/get_all_customers/";

}
