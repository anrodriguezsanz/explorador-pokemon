import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import type { PokemonItem } from '@/pokemon-list/models/PokemonList';

// Atom to store the selected type
export const selectedTypeAtom = atom<string>('');

// Atom to store the live search query
export const searchQueryAtom = atom<string>('');

// Atom to store the current page in list view
export const currentPageAtom = atom<number>(1);

// Atom to store the current page in favourites view
export const favouritesPageAtom = atom<number>(1);

// Atom to persist favourites in localStorage
export const favouritesAtom = atomWithStorage<PokemonItem[]>('favourites', []);

// Type for sort order
export type SortOrder = 'asc' | 'desc' | null;

// Atom to persist sorting
export const sortAtom = atomWithStorage<SortOrder>('pokemon-sort-order', null);
