import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { selectedTypeAtom } from '../utils/pokemon.store';
import { PokemonTypeService } from '../services/PokemonTypeService';

export const usePokemonTypes = () => {
    const [types, setTypes] = useState<string[]>([]);
    const [selectedType, setSelectedType] = useAtom(selectedTypeAtom);

    // Effect hook executed once, when the app starts
    useEffect(() => {
        fetchTypes();
    }, []);

    // Load types from the service
    const fetchTypes = async () => {
        try {
            const types = await PokemonTypeService.getTypes();
            setTypes(types);
        } catch (error) {
            console.error("Error cargando los tipos:", error);
        }
    };

    return {
        types,
        selectedType,
        setSelectedType
    };
};