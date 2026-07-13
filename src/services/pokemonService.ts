import axios from 'axios'
import type { PokemonResponse } from '@/interfaces/pokemon'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export async function fetchPokemon(id: number) {
    const { data } = await api.get<PokemonResponse>(`/${id}`)
    return data
}