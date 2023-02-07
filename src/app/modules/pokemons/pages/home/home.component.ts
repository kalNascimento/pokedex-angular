import { Component, OnInit } from '@angular/core';
import { AllPokemons } from '../../models/all-pokemons/all-pokemons.model';
import { PokemonService } from '../../services/pokemon-service/pokemon.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	constructor(private pokemonService: PokemonService) {}

	ngOnInit(): void {
		this.pokemonService.getAllPokemons(10, 0).subscribe((response) => {
			const pokemons = response as AllPokemons;
			console.log(pokemons);
		});
	}
}
