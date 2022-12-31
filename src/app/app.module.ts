import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home-page/home/home.component';
import { PokeballLoadingComponent } from './components/pokeball-loading/pokeball-loading.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { SearchBarComponent } from './components/home-page/search-bar/search-bar.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
