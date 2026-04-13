import type { PokemonDetails, ApiPokemonDetail } from "../models/PokemonDetails";
import { pokeApi } from "../../../../core/http/pokeApi";

export const PokemonDetailsService = {

    getPokemonById: async (id: number): Promise<PokemonDetails> => {
        const response = await pokeApi.get<ApiPokemonDetail>(`/pokemon/${id}`);
        const rawData = response.data;

        //TODO: REVIEW
        const cleanImage = rawData.sprites.other['official-artwork'].front_default;
        const cleanTypes = rawData.types.map(t => t.type.name);
        const cleanStats = rawData.stats.map(s => ({
            name: s.stat.name,
            value: s.base_stat
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