import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonRequest } from '../../models/pokemon-request/pokemon-request.model';
import { PokemonService } from '../../services/pokemon-service/pokemon.service';
import { Pokemon } from '../../models/pokemon/pokemon.model';
import { PokemonColor } from '../../models/pokemon-color/pokemon-color.model';
import { ColorsEnum } from '../../models/enums/colorsEnum';
import { PokeStatus } from '../../models/poke-status/pokeStatus';

@Component({
	selector: 'app-pokemon-details',
	templateUrl: './pokemon-details.component.html',
	styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
	pokemon = {} as Pokemon;

	constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {
		//
	}
	
	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.pokemonService.requestPokemon(params['name']).subscribe((response) => {
				const poke = response as PokemonRequest;
				this.pokemon = new Pokemon(poke.id, poke.name);

				this.pokemonService.requestPokemonsColor(poke.name).subscribe((response => {
					const resp = response as PokemonColor;

					this.pokemon.setPokemonColor(resp.color.name as ColorsEnum)
				}))

				this.pokemonService.requestPokemonsStats(poke.name).subscribe((response => {
					const resp = response as PokeStatus;

					this.pokemon.setPokemonStats(resp.stats)
					console.log(this.pokemon.getPokemonStats())
				}))
			});
		});
	}
}
