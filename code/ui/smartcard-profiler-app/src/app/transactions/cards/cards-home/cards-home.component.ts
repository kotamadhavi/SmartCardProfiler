import { Component, OnInit } from '@angular/core';
import { DataTableColumn } from 'src/app/app-common/app-inerfaces';
import { AppUtil } from 'src/app/app-common/app-util';
import { AppAngularRoutes } from 'src/app/app-common/constants/app-angular-routes';
import { CardApiService } from '../../services/card-api-service';

@Component({
  selector: 'app-cards-home',
  templateUrl: './cards-home.component.html',
  styleUrls: ['./cards-home.component.css']
})
export class CardsHomeComponent implements OnInit {

  public loading = true;
  public results = {};
  public data = [];
  public primaryKeys:string[]= [];
  public columns: DataTableColumn[] = [
        { data: 'url', title: 'Id', isLink: true, linkUrl: this.appAngRoutes.CARD_TRANSACTION_DETAILS_VIEW },
        { data: 'customer_id', title: 'Customer Id'},
        { data: 'card_value', title: 'Card Value'}
    ];


  constructor(private apiSvc:CardApiService,private appAngRoutes:AppAngularRoutes, private appUtil: AppUtil) { }

  ngOnInit(): void {

    this.apiSvc.getAllCardTransactions().subscribe(
       (resultsObj) => {

        if (resultsObj === null || resultsObj === undefined) {
          resultsObj = [];
          this.data = [];
          this.primaryKeys = [];
        }

        this.data = resultsObj.map((res:any) => {
          const row: any[] = [];

          this.primaryKeys = [];
          this.columns.forEach((col) => {
            if (col.data === 'url') {
              const pkey = this.appUtil.build_model_view_url(res[col.data], this.appAngRoutes.CARD_TRANSACTION_DETAILS_VIEW);
              row.push(pkey);
              this.primaryKeys.push(this.appUtil.getIdFromUrl(res[col.data]));

            }else {
              row.push(res[col.data]);
            }
          });
          return row;
        });

        this.loading = false;
       });
  }

  showAddNewCardTransaction() {

  }

  generateCardTransactionPredictEvent(indexOfelement:number) {
    const cardPrimaryKey = this.primaryKeys[indexOfelement];
    console.log("cardPrimaryKey " + cardPrimaryKey)
    this.apiSvc.generateCardTransactionPredictEvent(cardPrimaryKey).subscribe();
  }

  public isObject(val:any): boolean { return typeof val === 'object'; }
}
