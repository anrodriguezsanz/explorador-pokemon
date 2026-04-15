import { pokeApi } from "../../../../core/http/pokeApi";
import type { APIPokemonListResponse, PokemonItem, PokemonPaginatedList } from "../models/PokemonList";
import sharedCons from "../../../../shared/constants/shared.constants";

export const PokemonListService = {

    // Async function to get pokemon list. Directly provide limit and offset for pagination
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
                sprite: `${sharedCons.SPRITE_URL}${pokemonId}.png`
            };
        });

        // Return clean data and total count
        return {
            count: rawData.count,
            results: cleanData
        };
    },
}
