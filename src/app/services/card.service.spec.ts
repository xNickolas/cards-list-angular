import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CardService } from './card.service';

describe('CardService', () => {
  let service: CardService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CardService]
    });
    service = TestBed.inject(CardService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected card list', () => {
    const mockCardList = [
      { id: 1, title: 'Card 1', description: 'Description 1', img: 'image1.jpg', type: 'Paisagem' },
      { id: 2, title: 'Card 2', description: 'Description 2', img: 'image2.jpg', type: 'Flor' }
    ];

    service.getCardList().subscribe(cards => {
      expect(cards.length).toBe(2);
      expect(cards).toEqual(mockCardList);
    });

    const req = httpMock.expectOne('url_to_your_api_endpoint');
    expect(req.request.method).toBe('GET');
    req.flush(mockCardList);
  });
});
