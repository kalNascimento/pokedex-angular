import { Component, OnInit } from '@angular/core';
import { AllPokemons } from 'src/app/modules/pokemons/models/all-pokemons/all-pokemons.model';
import { PokemonService } from 'src/app/modules/pokemons/services/pokemon-service/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons(10, 0).subscribe(response => {
      let pokemons = response as AllPokemons
      console.log(pokemons)
    });
  }

}
