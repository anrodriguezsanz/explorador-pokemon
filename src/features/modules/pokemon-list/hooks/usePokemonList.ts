import { useState, useEffect } from 'react';
import { PokemonListService } from '../services/PokemonListService';
import type { PokemonItem } from '../models/PokemonList';
import sharedCons from '../../../../shared/constants/shared.constants';
import { useAtom, useAtomValue } from 'jotai';
import { selectedTypeAtom, searchQueryAtom } from '../../../../shared/utils/pokemon.store';
import { PokemonTypeService } from '../services/PokemonTypeService';
import listCons from '../constants/list.constants';

export const usePokemonList = () => {

    // --- STATE HOOKS ---

    const [pokemons, setPokemons] = useState<PokemonItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState<string>('');

    const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
    const selectedType = useAtomValue(selectedTypeAtom);


    // --- EFFECT HOOKS ---

    // Debounce effect for search query
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    // Reset page when type or search query change
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedType, debouncedSearchQuery]);

    // Fetch pokemons when page, type, or search query changes
    useEffect(() => {
        fetchPokemons(currentPage);
    }, [currentPage, selectedType, debouncedSearchQuery]);


    // --- ACTIONS ---

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
            if (selectedType !== '') {
                // If a type is selected, get pokemons by type
                const pokemonsByType = await PokemonTypeService.getPokemonByType(selectedType);
                setTotalCount(pokemonsByType.count);
                setPokemons(paginateResults(pokemonsByType.results, offset));
            } else if (debouncedSearchQuery !== '') {
                // If a search query is provided, get all pokemons and filter by name
                const allPokemons = await PokemonListService.getPokemonList(sharedCons.TOTAL_POKEMON, 0);
                const filteredPokemons = allPokemons.results.filter(pokemon =>
                    pokemon.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
                );
                setTotalCount(filteredPokemons.length);
                setPokemons(paginateResults(filteredPokemons, offset));
            } else {
                // If no type or search query is provided, get all pokemons
                const allPokemons = await PokemonListService.getPokemonList(sharedCons.LIMIT, offset);
                setTotalCount(allPokemons.count);
                setPokemons(allPokemons.results);
            }
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
        LIMIT: sharedCons.LIMIT
    };
};