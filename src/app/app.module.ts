import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardsService } from './cards.service';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    DetailCardComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
