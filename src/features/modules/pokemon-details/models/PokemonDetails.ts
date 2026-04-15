// Interface for the API response
export interface ApiPokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string; 
      };
    };
  };
  types: Array<{
    type: { name: string };
  }>;
  stats: Array<{
    base_stat: number;
    stat: { name: string };
  }>;
}

// Interface for the cleaned up data
export interface PokemonDetails {
  id: number;
  name: string;
  image: string;
  height: number;
  weight: number;
  types: string[];
  stats: Array<{
    name: string;
    value: number;
  }>;
}