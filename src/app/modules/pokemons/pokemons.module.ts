import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemons-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PokeballLoadingComponent } from '../shared/components/pokeball-loading/pokeball-loading.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
	declarations: [
        HomeComponent,
        PokeballLoadingComponent,
        HeaderComponent,
        SearchBarComponent],
	imports: [CommonModule, PokemonRoutingModule]
})
export class PokemonModule {}
