import { useState, useEffect } from 'react';
import { PokemonListService } from '../services/PokemonListService';
import { PokemonTypeService } from '../services/PokemonTypeService';
import type { PokemonItem } from '../models/PokemonList';
import sharedCons from '../../../../shared/constants/shared.constants';
import listCons from '../constants/list.constants';

interface UsePokemonDataProps {
    selectedType: string;
    debouncedSearchQuery: string;
    sortOrder: 'asc' | 'desc' | null;
    currentPage: number;
}

export const usePokemonData = ({
    selectedType,
    debouncedSearchQuery,
    sortOrder,
    currentPage
}: UsePokemonDataProps) => {
    const [pokemons, setPokemons] = useState<PokemonItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [totalCount, setTotalCount] = useState<number>(0);

    // Fetch Pokemon data when filters or page change
    useEffect(() => {
        fetchPokemons();
    }, [currentPage, selectedType, debouncedSearchQuery, sortOrder]);

    // Fetch Pokemon by type
    const fetchByType = async (type: string): Promise<PokemonItem[]> => {
        if (type !== '') {
            const data = await PokemonTypeService.getPokemonByType(type);
            return data.results;
        }
        const data = await PokemonListService.getPokemonList(sharedCons.TOTAL_POKEMON, 0);
        return data.results;
    };

    // Apply search filter
    const applySearch = (results: PokemonItem[], query: string): PokemonItem[] => {
        if (query === '') return results;
        return results.filter(pokemon =>
            pokemon.name.toLowerCase().includes(query.toLowerCase())
        );
    };

    // Apply sort filter
    const applySort = (results: PokemonItem[], order: 'asc' | 'desc' | null): PokemonItem[] => {
        if (!order) return results;
        return [...results].sort((a, b) =>
            order === 'asc'
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name)
        );
    };

    // Paginate results
    const paginate = (results: PokemonItem[], offset: number): PokemonItem[] => {
        return results.slice(offset, offset + sharedCons.LIMIT);
    };

    // Fetch Pokemon data
    const fetchPokemons = async () => {
        setIsLoading(true);
        const offset = (currentPage - 1) * sharedCons.LIMIT;

        try {
            let results = await fetchByType(selectedType);
            results = applySearch(results, debouncedSearchQuery);
            results = applySort(results, sortOrder);
            
            setTotalCount(results.length);
            setPokemons(paginate(results, offset));
        } catch (error) {
            console.error(listCons.ERROR_FETCHING_POKEMONS, error);
        } finally {
            setIsLoading(false);
        }
    };

    return { pokemons, isLoading, totalCount };
};
