import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { CardListComponent } from './card-list/card-list.component';
import { SearchResultComponent } from './search-result/search-result.component';


const routes: Routes = [
  { path: 'home', component: CardListComponent },
  { path: 'detail/:id', component: DetailCardComponent },
  { path: 'search/:pokemonName', component: SearchResultComponent },
  { path: '', redirectTo: 'home', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
