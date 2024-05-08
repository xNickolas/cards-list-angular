import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() card: Card = { id: 1, img: '', title: '', description: '', type: '' };

  @Output() delete: EventEmitter<Card> = new EventEmitter<Card>();

  deleteCard(): void {
    this.delete.emit(this.card);
  }

  getCardTypeClass(type: string): string {
    switch (type) {
      case 'Paisagem':
        return 'paisagem';
      case 'Flor':
        return 'flor';
      case 'Pizza':
        return 'pizza';
      default:
        return '';
    }
  }
}
