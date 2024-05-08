import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnInit {
  cardList: Card[] = [];
  filteredCardList: Card[] = [];
  searchText: string = '';

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.getCardList();
  }

  getCardList(): void {
    this.cardService.getCardList()
      .subscribe(cards => {
        this.cardList = cards;
        this.applyFilter();
      });
  }

  deleteCard(cardToDelete: Card): void {
    this.cardList = this.cardList.filter(card => card !== cardToDelete);
    this.applyFilter();
  }

  applyFilter(): void {
    if (this.searchText.trim() === '') {
      this.filteredCardList = this.cardList;
    } else {
      const searchTextLowerCase = this.searchText.toLowerCase().trim();
      this.filteredCardList = this.cardList.filter(card =>
        card.title.toLowerCase().includes(searchTextLowerCase) ||
        card.description.toLowerCase().includes(searchTextLowerCase)
      );
    }
  }

  onSearchInput(): void {
    this.applyFilter();
  }
}
