// --- TYPES ---

// Types List API response
export interface APITypesList {
  count: number;
  next: string;
  previous: null;
  results: APITypeListItem[];
}

// Each Type object in the API response
export interface APITypeListItem {
  name: string;
  url: string;
}

// List of Pokemons by type in the API response
export interface APIPokemonByType {
  pokemon: Array<{
    pokemon: {
      name: string;
      url: string;
    }
  }>;
}

// Types list in the app
export interface PokemonTypesList {
    types: string[];
}
