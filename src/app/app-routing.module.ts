import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { ProductComponent } from './page/product/product.component';
import { SaleComponent } from './page/sale/sale.component';
import { SalesListComponent } from './page/sales-list/sales-list.component';
import { GuardiaoGuard } from './service/guardiao.guard';
import { CustomerComponent } from './page/customer/customer.component';
import { SupplierComponent } from './page/supplier/supplier.component';
import { FinancialComponent } from './page/financial/financial.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'product', component: ProductComponent},
  { path: 'sale', component: SaleComponent},
  { path: 'sales', component: SalesListComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'supplier', component: SupplierComponent},
  { path: 'financial', component: FinancialComponent},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
