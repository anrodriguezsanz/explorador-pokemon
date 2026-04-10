import { useState, useEffect } from 'react';
import { PokemonListService } from '../services/PokemonListService';
import type { PokemonItem } from '../models/PokemonList';
import { LIMIT } from '../constants/constants.list'; 

export const usePokemonList = () => {

    // --- STATE HOOKS ---

    const [pokemons, setPokemons] = useState<PokemonItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);

    // --- EFFECT HOOK ---

    useEffect(() => {
        fetchPokemons(currentPage);
    }, [currentPage]);


    // --- ACTIONS ---

    // Fetch pokemons from API
    const fetchPokemons = async (page: number) => {
        setIsLoading(true); // Empezamos a cargar

        // Calculate offset
        const offset = (page - 1) * LIMIT;

        try {
            // Get the pokemons list from the service
            const data = await PokemonListService.getPokemonList(LIMIT, offset);

            // Set states
            setPokemons(data.results);
            setTotalCount(data.count);
        } catch (error) {
            console.error("Error al pedir los pokémon:", error);
        } finally {
            setIsLoading(false); // Terminamos de cargar (pase lo que pase)
        }
    };

    return {
        pokemons,
        isLoading,
        totalCount,
        currentPage,
        setCurrentPage,
        LIMIT
    };
};