// card.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = 'https://githubanotaai.github.io/frontend-interview-mock-data/cardlist.json';

  constructor(private http: HttpClient) { }

  getCardList(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl).pipe(
      map(cards => cards.map(card => ({
        ...card,
        type: this.mapCardTypeToString(parseInt(card.type))
      })))
    );
  }

  private mapCardTypeToString(type: number): string {
    switch (type) {
      case 1:
        return 'Paisagem';
      case 2:
        return 'Flor';
      case 3:
        return 'Pizza';
      default:
        return '';
    }
  }
}
