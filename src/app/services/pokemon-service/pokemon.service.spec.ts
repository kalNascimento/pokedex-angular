import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import { HttpClientModule, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

describe('PokemonServiceService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [HttpHandler]
    })
    .compileComponents();

    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
