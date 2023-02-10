import { ColorsEnum } from "../enuns/colorsEnum";
import { Colors } from "../enuns/colors";
import { ColorsLight } from "../enuns/colors-light";

export class Pokemon {
    private id = 0;
    private name = '';
    private color = {
        normal: '',
        light: ''
    };

    public constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public getPokemonId() {
        return this.id;
    }

    public getPokemonName() {
        return this.name;
    }
    
    public setPokemonColor(color: ColorsEnum) {
        this.color.normal = Colors[color];
        this.color.light = ColorsLight[color];
    }

    public getPokemonColor() {
        return this.color;
    }

    public getPokemonImage(): string {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${this.id}.png`
    }
}