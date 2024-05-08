import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { Card } from '../models/card.model';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  const mockCard: Card = {
    id: 1,
    img: 'mock-image-url',
    title: 'Mock Title',
    description: 'Mock Description',
    type: 'Paisagem'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.card = mockCard;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit delete event when deleteCard is called', () => {
    const deleteSpy = spyOn(component.delete, 'emit');
    component.deleteCard();
    expect(deleteSpy).toHaveBeenCalledWith(mockCard);
  });

  it('should render card content correctly', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card-title').textContent).toContain(mockCard.title);
    expect(compiled.querySelector('.card-text').textContent).toContain(mockCard.description);
  });
});
