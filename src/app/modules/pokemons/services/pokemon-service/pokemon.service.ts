import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PokemonService {
	readonly pokeApi!: string;

	constructor(private http: HttpClient) {
		this.pokeApi = 'https://pokeapi.co/api/v2';
	}

	requestAllPokemons(amount: number, init: number) {
		return this.http.get(
			`${this.pokeApi}/pokemon?limit=${amount}&offset=${init}`
		);
	}

	requestPokemonsColor(name: string) {
		return this.http.get(
			`https://pokeapi.co/api/v2/pokemon-species/${name}`
		);
	}
}
