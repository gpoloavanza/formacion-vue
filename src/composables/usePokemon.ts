import { ref } from "vue";
// Importing axios function for API calls
import axios from 'axios';
import type { PokemonResponse } from '../interfaces/pokemon'


export function usePokemon() {
    // Pokemon reactive variable to save image, name and types into PokemonCard
    const pokemon = ref({
    image: '',
    name: '',
    types: [] as string[]
    })

    // Reactive variables for loading and error states
    const loading = ref(false)
    const error = ref('')

    // Importing API_URL from .env
    const API_URL = import.meta.env.VITE_API_URL

    // Axios function for getPokemon()
    async function getPokemon(id: number) {
        // Resetting error and loading to true
        error.value = ''
        loading.value = true

        try {
            // 2 seconds delay to simulate a loading state
            await new Promise(resolve => setTimeout(resolve, 1000))

            // axios create
            const api = axios.create({
                baseURL: API_URL,
            })

            // axios API call through the PokemonResponse interface and the API_URL + id
            const { data } = await api.get<PokemonResponse>(`${API_URL}/${id}`)

            // Taking the image and name from the response and saving it into the pokemon reactive variable
            pokemon.value.image = data.sprites.front_default
            pokemon.value.name = data.name

            // Mapping the types from the response and saving it into the pokemon reactive variable
            pokemon.value.types = data.types.map(
                pokemonType => pokemonType.type.name)

            // Catching errors to show a user error and a developer console error
        } catch (err) {
            // If there is an error, it will be saved into the error reactive variable
            error.value = 'Error cargando el Pokémon. Inténtelo de nuevo más tarde.'

            // Turning off the loading state
        } finally {
            loading.value = false
        }
    }

    // Function to get a random pokemon Id 
    async function randomPokemon() {
        const randomId = Math.floor(Math.random() * 1025) + 1
        await getPokemon(randomId)

    }

    // Returning the ref variables and functions to be used in the component
    return { pokemon, loading, error, randomPokemon }
}