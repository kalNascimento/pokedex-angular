import { Component, Input} from '@angular/core';
import { Pokemon } from '../../models/pokemon/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;

  constructor() { /* TODO document why this constructor is empty */   }

}
