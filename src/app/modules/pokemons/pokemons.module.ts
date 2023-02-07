import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemons-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, PokemonRoutingModule]
})
export class PokemonModule {}
