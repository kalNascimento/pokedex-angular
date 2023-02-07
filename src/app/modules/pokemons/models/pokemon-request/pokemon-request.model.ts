export interface Pokemon {
	id: number;
	name: string;
	base_experience: number;
	height: number;
	is_default: boolean;
	order: number;
	weight: number;
	abilities: [];
	form: [];
	game_indices: [];
	held_items: [];
	location_area_encounters: string;
	moves: [];
	species: [];
	sprites: [];
	stats: [];
	types: [];
	past_types: [];
}
