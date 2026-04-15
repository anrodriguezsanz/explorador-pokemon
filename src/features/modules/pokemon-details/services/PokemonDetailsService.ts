import type { PokemonDetails, ApiPokemonDetail } from "../models/PokemonDetails";
import { pokeApi } from "../../../../core/http/pokeApi";

export const PokemonDetailsService = {

    // Fetch a specific Pokemon by ID from the API
    getPokemonById: async (id: number): Promise<PokemonDetails> => {
        const response = await pokeApi.get<ApiPokemonDetail>(`/pokemon/${id}`);
        const rawData = response.data;

        const cleanImage = rawData.sprites.other['official-artwork'].front_default;
        const cleanTypes = rawData.types.map(type => type.type.name);
        const cleanStats = rawData.stats.map(stat => ({
            name: stat.stat.name,
            value: stat.base_stat
        }));

        return {
            id: rawData.id,
            name: rawData.name,
            height: rawData.height,
            weight: rawData.weight,
            image: cleanImage,
            types: cleanTypes,
            stats: cleanStats
        };
    }

}