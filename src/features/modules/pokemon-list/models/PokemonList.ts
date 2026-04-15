import type { BasePokemon } from '../../../../shared/models/Pokemon';

// --- POKEMON ---

// Pokemon List API response
export interface APIPokemonListResponse {
  count: number;
  next: string;
  previous: null;
  results: APIPokemonListItem[];
}

// Each Pokemon object in the API response
export interface APIPokemonListItem {
  name: string;
  url: string;
}

// Each Pokemon item in the list (inherits id, name and sprite)
export interface PokemonItem extends BasePokemon {
}  

// Paginated list in the app
export interface PokemonPaginatedList {
    count: number;
    results: PokemonItem[];
}
