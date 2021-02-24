# SmartcardProfilerApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Sprint 01 Commands
````sh

cd SmartCardProfiler/code/ui/smartcard-profiler-app

ng add @ng-bootstrap/ng-bootstrap
# Say No for "Would you like to share anonymous usage data about this project "
ng g c home
ng g m transactions
ng g m masterdata 
ng g m predictions
ng g m app_common
ng g m app_shared
ng g m app_google_techstack

ng g c app-common/layout/navbar -m app-common
ng g c app-common/layout/header -m app-common
ng g c app-common/layout/footer -m app-common

ng g c app-google-techstack/pubsub/pubsubHome
ng g c app-google-techstack/bigquery/bigqueryHome
ng g c app-google-techstack/dataproc/dataprocyHome

ng g c masterdata/customer/customerHome
ng g c predictions/customer/custPredictionsHome
ng g c transactions/customer/custTransactionsHome

ng g c transactions/customer/cards/cardsHome
ng g c transactions/customer/cards/crud/create
ng g c transactions/customer/cards/crud/view
ng g c transactions/customer/cards/crud/update
ng g c transactions/customer/cards/crud/delete


touch src/app/app-google-techstack/app-google-teckstack-routing.ts


````

### Adding Layout
- 1. Imported app-common moudle in app.module.ts

- 2. Added "exports" of NavBarComponent in AppCommonComponent.ts

- 3. Added <app-navbar> to app.component.html

- 4. Updated index.html with <link> CSS and <script> as detailed in this Bootstrap Quickstart section https://getbootstrap.com/docs/4.0/getting-started/introduction/

- 5. Updated navbar.component.html with the following
  - a. Removed Search HTML form that generally comes when we copy the Bootstrap code from the getbootstrap.com website
  - b. Changed the lables of the Navbar HTML i.e. removed the dummy values that we get generally when we copy the HTML from the above getboostrap.com website
  - c. Changed the <nav class> names to have "navbar-dark bg-primary" so that blue color is shown in the Navigation bar
  - d. Added routerLink and routerLinkActive to all the <a> tags in navbar.compoment.html

- 6. Added RouterModule as imports in app-common.module.ts

- 7. Added code for AppGoogleTechstackRouting class in src/app/app-google-techstack/app-google-teckstack-routing.ts. Also imported "AppGoogleTechstackRouting" in app-google-techstack.module.ts

- 8. Added code for "Routes" variable like pubsub, dataproc, bigquery in app-google-teckstack-routing.ts

- 9. Added code for "Routes" variable in masterdata-routing.ts, predictions-routing.ts, transactions-routing.ts

- 10. Imported MasterDataRouting, PredictionsRouting and TransactionsRouting in masterdata-module.ts, predictions-routing.ts and transactions-routing.ts files respectively

- 11. 
