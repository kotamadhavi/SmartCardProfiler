import { Component, OnInit } from '@angular/core';
import { DataTableColumn } from 'src/app/app-common/app-inerfaces';
import { AppUtil } from 'src/app/app-common/app-util';
import { AppAngularRoutes } from 'src/app/app-common/constants/app-angular-routes';
import { CustomerApiService } from '../../services/customer/customer-api.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  public loading = true;
  public results = {};
  public data = [];
  public columns: DataTableColumn[] = [
        { data: 'url', title: 'Id', isLink: true, linkUrl: this.appAngRoutes.CUST_PROFILE_VIEW },
        { data: 'first_name', title: 'First Name'},
        { data: 'last_name', title: 'Last Name'},
        { data: 'email', title: 'Email'},
    ];


  constructor(private apiSvc:CustomerApiService, private appAngRoutes:AppAngularRoutes, private appUtil: AppUtil) { }

  ngOnInit(): void {

    this.apiSvc.getAllCustomerProfiles().subscribe(
       (resultsObj) => {

        if (resultsObj === null || resultsObj === undefined) {
          resultsObj = [];
          this.data = [];
        }

        this.data = resultsObj.map((res:any) => {
          const row: any[] = [];

          this.columns.forEach((col) => {
            if (col.data === 'url') {
              row.push(this.appUtil.build_model_view_url(res[col.data], this.appAngRoutes.CUST_PROFILE_VIEW));
            }else {
              row.push(res[col.data]);
            }
          });
          return row;
        });

        this.loading = false;
       });
  }

  public isObject(val:any): boolean { return typeof val === 'object'; }

  showAddNewCustomer() {

  }

}
