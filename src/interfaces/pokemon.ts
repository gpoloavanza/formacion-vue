export interface PokemonTypeInfo {
    name: string
}

export interface PokemonType {
    type: PokemonTypeInfo
}

export interface PokemonSprites {
    front_default: string | null
    other?: {
        'official-artwork'?: { front_default: string | null }
    }
}

export interface PokemonResponse {
    name: string
    sprites: PokemonSprites
    types: PokemonType[]
}

export interface Pokemon {
    name: string
    image: string
    types: string[] // Strings array
}

export interface AssignedPokemon {
    name: string
    image: string
}