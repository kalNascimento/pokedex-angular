import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemons-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { PokeballLoadingComponent } from '../shared/components/pokeball-loading/pokeball-loading.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';

@NgModule({
	declarations: [
        HomeComponent,
        PokeballLoadingComponent,
        SearchBarComponent,
        HeaderComponent,
        PokemonCardComponent,
        FooterComponent,
        PokemonDetailsComponent
        ],
	imports: [CommonModule, PokemonRoutingModule],
        schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class PokemonModule {}
