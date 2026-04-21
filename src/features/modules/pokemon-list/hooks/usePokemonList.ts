import { useEffect, useRef } from 'react';
import { usePokemonFilters } from './usePokemonFilters';
import { usePokemonData } from './usePokemonData';
import sharedCons from '@/shared/constants/shared.constants';

export const usePokemonList = () => {
    const filters = usePokemonFilters();
    
    // Track previous filter values to detect actual changes
    const prevFiltersRef = useRef({
        selectedType: filters.selectedType,
        debouncedSearchQuery: filters.debouncedSearchQuery
    });

    // Reset page to 1 when filters change
    useEffect(() => {
        const prev = prevFiltersRef.current;
        
        if (prev.selectedType !== filters.selectedType || 
            prev.debouncedSearchQuery !== filters.debouncedSearchQuery) {
            filters.setCurrentPage(1);
            prevFiltersRef.current = {
                selectedType: filters.selectedType,
                debouncedSearchQuery: filters.debouncedSearchQuery
            };
        }
    }, [filters.selectedType, filters.debouncedSearchQuery, filters.setCurrentPage]);

    // Fetch and transform Pokemon data
    const data = usePokemonData({
        selectedType: filters.selectedType,
        debouncedSearchQuery: filters.debouncedSearchQuery,
        sortOrder: filters.sortOrder,
        currentPage: filters.currentPage
    });

    return {
        pokemons: data.pokemons,
        isLoading: data.isLoading,
        totalCount: data.totalCount,
        currentPage: filters.currentPage,
        setCurrentPage: filters.setCurrentPage,
        searchQuery: filters.searchQuery,
        setSearchQuery: filters.setSearchQuery,
        resetFilters: filters.resetFilters,
        LIMIT: sharedCons.LIMIT
    };
};