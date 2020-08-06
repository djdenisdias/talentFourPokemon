import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit {
  
  public id;
  public detail;

  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.cardsService.detail(this.id).subscribe( (res) => this.detail = res); 
  }

}
