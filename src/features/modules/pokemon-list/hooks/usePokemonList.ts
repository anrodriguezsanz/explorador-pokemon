import { useState, useEffect } from 'react';
import { PokemonListService } from '../services/PokemonListService';
import type { PokemonItem } from '../models/PokemonList';
import { LIMIT } from '../constants/constants.list';
import { useAtomValue } from 'jotai';
import { selectedTypeAtom } from '../utils/pokemon.store';
import { PokemonTypeService } from '../services/PokemonTypeService';

export const usePokemonList = () => {

    // --- STATE HOOKS ---

    const [pokemons, setPokemons] = useState<PokemonItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const selectedType = useAtomValue(selectedTypeAtom);

    // --- EFFECT HOOKS ---

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedType]);

    useEffect(() => {
        fetchPokemons(currentPage);
    }, [currentPage, selectedType]);


    // --- ACTIONS ---

    // Fetch pokemons from API
    const fetchPokemons = async (page: number) => {
        setIsLoading(true);

        // Calculate offset
        const offset = (page - 1) * LIMIT;

        try {
            if (selectedType !== '') {
                // If a type is selected, get pokemons by type
                const pokemonsByType = await PokemonTypeService.getPokemonByType(selectedType);
                setTotalCount(pokemonsByType.count);
                // Slice the results for pagination
                const slicedData = pokemonsByType.results.slice(offset, offset + LIMIT);
                setPokemons(slicedData);
            } else {
                // If no type is selected, get all pokemons
                const data = await PokemonListService.getPokemonList(LIMIT, offset);
                setTotalCount(data.count);
                setPokemons(data.results);
            }
        } catch (error) {
            console.error("Error al pedir los pokémon:", error);
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
        LIMIT
    };
};