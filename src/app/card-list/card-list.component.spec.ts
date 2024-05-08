import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardListComponent } from './card-list.component';
import { CardService } from '../services/card.service';
import { of } from 'rxjs';
import { Card } from '../models/card.model';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;
  let cardServiceSpy: jasmine.SpyObj<CardService>;

  const mockCardList: Card[] = [
    { id: 1, title: 'Card 1', description: 'Description 1', img: 'image1.jpg', type: 'Paisagem' },
    { id: 2, title: 'Card 2', description: 'Description 2', img: 'image2.jpg', type: 'Flor' }
  ];

  beforeEach(async () => {
    cardServiceSpy = jasmine.createSpyObj('CardService', ['getCardList']);
    await TestBed.configureTestingModule({
      declarations: [CardListComponent],
      providers: [{ provide: CardService, useValue: cardServiceSpy }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    cardServiceSpy.getCardList.and.returnValue(of(mockCardList));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch card list on initialization', () => {
    expect(cardServiceSpy.getCardList).toHaveBeenCalled();
    expect(component.cardList).toEqual(mockCardList);
    expect(component.filteredCardList).toEqual(mockCardList);
  });

  it('should filter card list by search text', () => {
    component.searchText = 'Card 1';
    component.applyFilter();
    expect(component.filteredCardList.length).toBe(1);
    expect(component.filteredCardList[0].title).toBe('Card 1');
  });
});
