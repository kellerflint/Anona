import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResponseDashboardComponent } from './response-dashboard/response-dashboard.component';
import { ShortResponseComponent } from './response-dashboard/responses/short-response/short-response.component';
import { ShortResponseInputComponent } from './response-dashboard/inputs/short-response-input/short-response-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponseDashboardComponent,
    ShortResponseComponent,
    ShortResponseInputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
