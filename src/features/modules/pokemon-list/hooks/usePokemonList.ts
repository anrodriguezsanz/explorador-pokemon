import { useState, useEffect, useRef } from 'react';
import { PokemonListService } from '../services/PokemonListService';
import type { PokemonItem } from '../models/PokemonList';
import sharedCons from '../../../../shared/constants/shared.constants';
import { useAtom } from 'jotai';
import { selectedTypeAtom, searchQueryAtom, currentPageAtom } from '../../../../shared/utils/pokemon.store';
import { PokemonTypeService } from '../services/PokemonTypeService';
import listCons from '../constants/list.constants';

export const usePokemonList = () => {

    // --- STATE HOOKS ---

    const [pokemons, setPokemons] = useState<PokemonItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState<string>('');

    const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
    const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
    const [selectedType, setSelectedType] = useAtom(selectedTypeAtom);


    // --- REF HOOK
    // Track previous filter values to detect actual changes
    const prevFiltersRef = useRef({ selectedType, debouncedSearchQuery });


    // --- EFFECT HOOKS ---

    // Debounce effect for search query
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    // If filters actually change, reset page to 1. If not, keep the current page
    useEffect(() => {
        const prevFilters = prevFiltersRef.current;

        if (prevFilters.selectedType !== selectedType || prevFilters.debouncedSearchQuery !== debouncedSearchQuery) {
            setCurrentPage(1);
            prevFiltersRef.current = { selectedType, debouncedSearchQuery };
        }
    }, [selectedType, debouncedSearchQuery]);

    // Fetch pokemons when page, type, or search query changes
    useEffect(() => {
        fetchPokemons(currentPage);
    }, [currentPage, selectedType, debouncedSearchQuery]);


    // --- ACTIONS ---

    // Function to reset filters
    const resetFilters = () => {
        setSearchQuery('');
        setSelectedType('');
    };

    // Helper function to paginate results
    const paginateResults = (results: PokemonItem[], offset: number) => {
        return results.slice(offset, offset + sharedCons.LIMIT);
    };

    // Fetch pokemons from API
    const fetchPokemons = async (page: number) => {
        setIsLoading(true);

        // Calculate offset
        const offset = (page - 1) * sharedCons.LIMIT;

        try {
            let results: PokemonItem[] = [];
            // If a type is selected, get Pokemon by type. If not, get all Pokemon
            if (selectedType !== '') {
                const pokemonsByType = await PokemonTypeService.getPokemonByType(selectedType);
                results = pokemonsByType.results;
            } else {
                const allPokemons = await PokemonListService.getPokemonList(sharedCons.TOTAL_POKEMON, 0);
                results = allPokemons.results;
            }
            // Apply search filter on top of type filter
            if (debouncedSearchQuery !== '') {
                results = results.filter(pokemon =>
                    pokemon.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
                );
            }
            // Update total count and paginate results
            setTotalCount(results.length);
            setPokemons(paginateResults(results, offset));
        } catch (error) {
            console.error(listCons.ERROR_FETCHING_POKEMONS, error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        pokemons,
        isLoading,
        totalCount,
        currentPage,
        setCurrentPage,
        searchQuery,
        setSearchQuery,
        resetFilters,
        LIMIT: sharedCons.LIMIT
    };
};