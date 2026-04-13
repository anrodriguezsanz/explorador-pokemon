import { pokeApi } from "../../../../core/http/pokeApi";
import type { APIPokemonListResponse, PokemonItem, PokemonPaginatedList } from "../models/PokemonList";

export const PokemonListService = {

    // Async function to get pokemon list
    getPokemonList: async (limit: number = 20, offset: number = 0): Promise<PokemonPaginatedList> => {
        const response = await pokeApi.get<APIPokemonListResponse>(`/pokemon?limit=${limit}&offset=${offset}`);
        const rawData = response.data;

        // Map raw data to clean PokemonItem format
        const cleanData: PokemonItem[] = rawData.results.map((rawPokemon) => {
            const parts = rawPokemon.url.split('/');
            const pokemonId = Number(parts[parts.length - 2]);
            return {
                id: pokemonId,
                name: rawPokemon.name,
                // Use GitHub URL for sprites to avoid excessive requests
                sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
            };
        });
        
        // Return clean data and total count (for pagination)
        return {
            count: rawData.count,
            results: cleanData
        };
    },
}
