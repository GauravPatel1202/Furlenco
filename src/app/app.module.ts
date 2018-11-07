import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule }          from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GeolocationComponent } from './component/geolocation/geolocation.component';
import { ListComponent } from './component/list/list.component';
import { ReviewComponent } from './component/review/review.component';
import { ListserviceService } from './service/list/listservice.service';
import { LocationserviceService } from './service/location/locationservice.service';
import { ReviewserviceService } from './service/review/reviewservice.service';
import { DataService } from './service/common/data.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GeolocationComponent,
    ListComponent,
    ReviewComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ListserviceService,LocationserviceService,ReviewserviceService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
