import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import type { PokemonItem } from '../../features/modules/pokemon-list/models/PokemonList';

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
