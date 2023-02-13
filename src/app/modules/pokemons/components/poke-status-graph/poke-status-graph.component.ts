import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon/pokemon.model';

@Component({
  selector: 'app-poke-status-graph',
  templateUrl: './poke-status-graph.component.html',
  styleUrls: ['./poke-status-graph.component.scss']
})
export class PokeStatusGraphComponent {
  @Input() pokemon!: Pokemon;

  constructor() { /* TODO document why this constructor is empty */  }
}
