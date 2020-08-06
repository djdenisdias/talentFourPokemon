import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cards } from './model/cards.model';
import { environment } from 'src/environments/environment';
import { Detail } from './model/detail.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Cards>(`${environment.pokemonEndpoint}/cards`);
  }

  detail(id: string) {
    return this.http.get<Detail>(`${environment.pokemonEndpoint}/cards/${id}`);
  }

  search(pokemon: string) {
    return this.http.get<Cards>(`${environment.pokemonEndpoint}/cards?name=${pokemon}`);
  }
}
