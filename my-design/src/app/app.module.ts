import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavserviceService } from "./Navigation/navservice.service";
import { AppComponent } from './app.component';
import { NavelementComponent } from './Navigation/navelement/navelement.component';
import { NavpanelComponent } from './Navigation/navpanel/navpanel.component';
import { NaviagtionComponent } from './Navigation/naviagtion/naviagtion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavelementComponent,
    NavpanelComponent,
    NaviagtionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NavserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
