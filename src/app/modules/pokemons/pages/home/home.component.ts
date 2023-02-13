import { Component, OnInit } from '@angular/core';
import { AllPokemons } from '../../models/all-pokemons/all-pokemons.model';
import { PokemonService } from '../../services/pokemon-service/pokemon.service';
import { Pokemon } from '../../models/pokemon/pokemon.model';
import { PokemonColor } from '../../models/pokemon-color/pokemon-color.model';
import { ColorsEnum } from '../../models/enums/colorsEnum';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	pokemons: Array<Pokemon> = [];

	constructor(private pokemonService: PokemonService) {}

	ngOnInit(): void {
		this.pokemonService.requestAllPokemons(20, 0).subscribe((response) => {
			const pokemon = response as AllPokemons;

			pokemon.results.forEach(pokemon => {
				const id = parseInt(
								pokemon.url
									.slice(34)
									.replace('/', '')
								);

				const objPokemon = new Pokemon(id, pokemon.name);

				this.pokemonService.requestPokemonsColor(pokemon.name).subscribe((response => {
					const resp = response as PokemonColor;

					objPokemon.setPokemonColor(resp.color.name as ColorsEnum)
					this.pokemons.push(objPokemon);

					this.pokemons.sort((a, b) => {
						if (a.getPokemonName() > b.getPokemonName()) {
							return 1;
						}
						if (a.getPokemonName() < b.getPokemonName()) {
							return -1;
						}
						return 0;
					});
				}))
			});
		});
	}
}
