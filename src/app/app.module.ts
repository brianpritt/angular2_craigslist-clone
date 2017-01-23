import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { routing } from './app.routing';
import { CommunityComponent } from './community/community.component';
import { PersonalsComponent } from './personals/personals.component';
import { HousingComponent } from './housing/housing.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { ServicesComponent } from './services/services.component';
import { JobsComponent } from './jobs/jobs.component';
import { CommunityListComponent } from './community-list/community-list.component';
import { ForSaleListComponent } from './for-sale-list/for-sale-list.component';
import { EditForSaleComponent } from './edit-for-sale/edit-for-sale.component';
import { NewForSaleComponent } from './new-for-sale/new-for-sale.component';
import { ForSaleDetailComponent } from './for-sale-detail/for-sale-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CommunityComponent,
    PersonalsComponent,
    HousingComponent,
    ForSaleComponent,
    ServicesComponent,
    JobsComponent,
    CommunityListComponent,
    ForSaleListComponent,
    EditForSaleComponent,
    NewForSaleComponent,
    ForSaleDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
