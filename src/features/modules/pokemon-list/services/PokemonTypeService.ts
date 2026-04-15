import { pokeApi } from '../../../../core/http/pokeApi';
import type { APITypesList, APIPokemonByType } from '../models/PokemonType';
import type { PokemonItem, PokemonPaginatedList } from '../models/PokemonList'; 
import sharedCons from '../../../../shared/constants/shared.constants';

export const PokemonTypeService = {
  
  // Fetch all types from the API and return an array of their names
  getTypes: async (): Promise<string[]> => {
    const response = await pokeApi.get<APITypesList>('/type');
    return response.data.results.map((type) => type.name);
  },

  // Fetch all Pokemon of a specific type from the API
  getPokemonByType: async (typeName: string): Promise<PokemonPaginatedList> => {
    const response = await pokeApi.get<APIPokemonByType>(`/type/${typeName}`);
    const rawPokemonList = response.data.pokemon;

    // Returns an array of PokemonItem objects with id, name and sprite
    const cleanData: PokemonItem[] = rawPokemonList.map((rawItem) => {
      const pokemonData = rawItem.pokemon; 
      const parts = pokemonData.url.split('/');
      const pokemonId = Number(parts[parts.length - 2]);
      return {
        id: pokemonId,
        name: pokemonData.name,
        sprite: `${sharedCons.SPRITE_URL}${pokemonId}.png`
      };
    });

    return {
      count: cleanData.length,
      results: cleanData
    };
  }
};