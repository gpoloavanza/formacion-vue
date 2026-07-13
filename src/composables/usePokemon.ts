import { ref } from "vue";
import { fetchPokemon } from "@/services/pokemonService";

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

    async function preloadImage(url: string): Promise<void> {
        return new Promise((resolve) => {
            const img = new Image()
            img.onload = () => resolve()
            img.onerror = () => resolve()
            img.src = url
        })
    }

    // Axios function for getPokemon()
    async function getPokemon(id: number) {
        // Resetting error and loading to true
        error.value = ''
        loading.value = true

        try {
            // axios API call through the PokemonResponse interface and the API_URL + id
            const data = await fetchPokemon(id)

            const imageUrl = data.sprites.front_default
                ?? data.sprites.other?.['official-artwork']?.front_default
                ?? ''

            if (imageUrl) {
                await preloadImage(imageUrl)
            }

            // Taking the image and name from the response and saving it into the pokemon reactive variable
            pokemon.value = {
                image: imageUrl,
                name: data.name,
                types: data.types.map(t => t.type.name)
            }
            
            // Catching errors to show a user error
        } catch (err) {
            // If there is an error, it will be saved into the error reactive variable
            error.value = 'Error cargando el Pokémon. Inténtelo de nuevo más tarde.'

            // Turning off the loading state
        } finally {
            loading.value = false
        }
    }

    let lastId = 0

    // Function to get a random pokemon Id 
    async function randomPokemon() {
    let randomId: number
    do {
        randomId = Math.floor(Math.random() * 1025) + 1
    } while (randomId === lastId)
    lastId = randomId
    await getPokemon(randomId)
}

    // Returning the ref variables and functions to be used in the component
    return { pokemon, loading, error, randomPokemon }
}