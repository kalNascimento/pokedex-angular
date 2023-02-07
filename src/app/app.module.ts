import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/pokemons/pages/home/home.component';
import { PokeballLoadingComponent } from './modules/shared/components/pokeball-loading/pokeball-loading.component';
import { PokemonDetailsComponent } from './modules/pokemons/pages/pokemon-details/pokemon-details.component';
import { SearchBarComponent } from './modules/pokemons/components/search-bar/search-bar.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokeballLoadingComponent,
    PokemonDetailsComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
