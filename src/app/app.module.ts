import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { TopViewComponent } from './top-view/top-view.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { PaymentDetailsService } from './payment-details.service';

@NgModule({
  declarations: [
    AppComponent,
    PaymentPageComponent,
    TopViewComponent,
    MainBodyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [PaymentDetailsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
