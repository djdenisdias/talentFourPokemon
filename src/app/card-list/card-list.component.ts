import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { Router } from '@angular/router';
import { Card } from '../model/card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  public cards: Card[];
  public pokemonName: string;

  constructor(
    private cardsService: CardsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.list();
  }

  list() {
    this.cardsService.list().subscribe( 
      (res) => this.cards = res.cards.sort(
        (a,b) => (a.name > b.name) ? 1 : ((b.name> a.name) ? -1 : 0)
      )
    )
  }

  showDetails(id) {
    this.router.navigate(['/detail', id]);
  }

  searchByName() {
    if(this.pokemonName){
      this.router.navigate(['/search', this.pokemonName]);
    }else{
      alert('Preencha o nome do Pokémon!')
    }
  }
}
