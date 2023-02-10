export interface AllPokemons {
	count: number;
	next: number;
	previous: number;
	results: [{
		name: string,
		url: string
	}];
}
