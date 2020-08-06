import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../model/card.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  public pokemonName: string;
  public cards: Card[];

  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pokemonName = this.route.snapshot.paramMap.get('pokemonName');
    this.cardsService.search(this.pokemonName).subscribe(
      (res) => {this.cards = res.cards.sort(
        (a,b) => (a.name > b.name) ? 1 : ((b.name> a.name) ? -1 : 0)
        )
      }
    ); 
  }

  showDetails(id) {
    this.router.navigate(['/detail', id]);
  }

}
