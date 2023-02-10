import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		pathMatch: 'full'
	},
	{
		path: 'details/:name',
		component: PokemonDetailsComponent,
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PokemonRoutingModule {}
