export interface PokemonTypeInfo {
    name: string
}

export interface PokemonType {
    type: PokemonTypeInfo
}

export interface PokemonSprites {
    front_default: string
}

export interface PokemonResponse {
    name: string
    sprites: PokemonSprites
    types: PokemonType[]
}