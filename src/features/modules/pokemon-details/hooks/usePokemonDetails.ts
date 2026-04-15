import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonDetailsService } from '../services/PokemonDetailsService';
import type { PokemonDetails } from '../models/PokemonDetails';
import detailCons from '../constants/constants.detail';

export const usePokemonDetails = () => {
    const { id } = useParams<{ id: string }>();

    const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Effect hook to fetch pokemon detail when id changes
    useEffect(() => {
        if (id) {
            fetchDetail(id);
        }
    }, [id]);

    // Fetch pokemon detail from API
    const fetchDetail = async (pokemonId: string) => {
        setIsLoading(true);
        try {
            const data = await PokemonDetailsService.getPokemonById(parseInt(pokemonId));
            setPokemon(data);
        } catch (error) {
            console.error(detailCons.ERROR_LOADING_DETAIL, error);
        } finally {
            setIsLoading(false);
        }
    };

    return { pokemon, isLoading };
};