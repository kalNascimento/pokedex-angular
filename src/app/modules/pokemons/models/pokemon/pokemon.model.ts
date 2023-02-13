import { ColorsEnum } from "../enums/colorsEnum";
import { enumNormalColor } from "../enums/enumNormalColors";
import { enumLightColor } from "../enums/enumLightColors";
import { PokeStatus } from "../poke-status/pokeStatus";

export class Pokemon {
    private id = 0;
    private name = '';
    private normalColor = '';
    private lightColor = '';
    private stats = [
        {
            base_stat: 0,
            stat: {
                name: '',
                url: ''
            }
        }
    ];

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
        this.normalColor = enumNormalColor[color];
        this.lightColor = enumLightColor[color];
    }

    public getPokemonNormalColor() {
        return this.normalColor;
    }

    public getPokemonLightColor() {
        return this.lightColor;
    }

    public getPokemonImage(): string {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${this.id}.png`
    }

    public setPokemonStats(stats: any) {
        this.stats = stats;
    }
    public getPokemonStats() {
        return this.stats;
    }
}