import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
//import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
//import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
//import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatDividerModule } from '@angular/material/divider';
//import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
//import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
//import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
//import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
//import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
//import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatSortModule } from '@angular/material/sort';
//import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
//import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
//import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { ToggleDirective } from './dashboard/sidebar/toggle.directive';
import { HomeComponent } from './page/home/home.component';
///////componentes add posteriormente
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
//import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ProductComponent } from './page/product/product.component';
import { SaleDialogComponent } from './page/sale-dialog/sale-dialog.component';
import { SaleComponent } from './page/sale/sale.component';
import { SalesListComponent } from './page/sales-list/sales-list.component';
import { PaymentService } from './service/payment.service';
import { ProductService } from './service/product.service';
import { ConfirmaDeleteComponent } from './util/confirma-delete/confirma-delete.component';
import { SaleService } from './service/sale.service';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { LoginService } from './service/login.service';
import { LoginComponent } from './page/login/login.component';
import { HttpInterceptorModule } from './service/headerInterceptor.service';
import { CustomerComponent } from './page/customer/customer.component';
import { SupplierComponent } from './page/supplier/supplier.component';
import { FinancialComponent } from './page/financial/financial.component';
///// Angular Material

import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToggleDirective,
    HomeComponent,
    ConfirmaDeleteComponent,
    ProductComponent,
    SaleComponent,
    SaleDialogComponent,
    SalesListComponent,
    LoginComponent,
    CustomerComponent,
    SupplierComponent,
    FinancialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTooltipModule,
    MatRippleModule,
    MatTabsModule,
    MatDividerModule,
    MatToolbarModule,
    MatGridListModule,
    FormsModule,
    CurrencyMaskModule,
    HttpInterceptorModule,//setar token no header
    MatDatepickerModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    MatBadgeModule,
    MatChipsModule,
    NgxMaskDirective, 
    NgxMaskPipe
 
  ],
  providers: [
    provideNgxMask(),
    ProductService,
    PaymentService,
    SaleService,
    LoginService,
    //informar formato da data local
    { provide: LOCALE_ID, useValue: 'pt-BR' }
    // { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt'
    // },

    // /* if you don't provide the currency symbol in the pipe,
    // this is going to be the default symbol (R$) ... */
    // {
    //   provide: DEFAULT_CURRENCY_CODE,
    //   useValue: 'BRL'
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
