import { TestBed } from '@angular/core/testing';

import { PokemonService } from "../pokemon-service/pokemon.service"
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('PokemonServiceService', () => {
	let service: PokemonService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [HttpClient, HttpHandler]
		});
		service = TestBed.inject(PokemonService);
		
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
