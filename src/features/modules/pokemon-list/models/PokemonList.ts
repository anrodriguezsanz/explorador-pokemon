// Interfaces for Pokemon List API response
export interface PokemonListResponse {
  count: number;
  next: string;
  previous: null;
  results: APIPokemonListItem[];
}

// Interface for each item in the API response
export interface APIPokemonListItem {
  name: string;
  url: string;
}

// Interface for each item in the app
export interface PokemonItem {
    id: number;
    name: string;
    sprite: string;
} 

// Interface for the paginated list in the app
export interface PokemonPaginatedList {
    count: number;
    results: PokemonItem[];
}