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

// Each Pokemon object in the app
export interface PokemonItem {
    id: number;
    name: string;
    sprite: string;
} 

// Paginated list in the app
export interface PokemonPaginatedList {
    count: number;
    results: PokemonItem[];
}
