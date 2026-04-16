import { useAtom } from 'jotai';
import { favouritesAtom, favouritesPageAtom } from '../utils/pokemon.store';
import type { BasePokemon } from '../models/Pokemon';
import sharedCons from '../constants/shared.constants';

export const usePokemonFavourites = () => {

    const [currentPage, setCurrentPage] = useAtom(favouritesPageAtom);
    const [favourites, setFavourites] = useAtom(favouritesAtom);

    // Check if a pokemon is in favourites
    const isFavourite = (pokemon: BasePokemon) => {
        return favourites.some((fav) => fav.id === pokemon.id);
    };

    // Helper function to paginate favourites
    const paginateFavourites = () => {
        const offset = (currentPage - 1) * sharedCons.LIMIT;
        return favourites.slice(offset, offset + sharedCons.LIMIT);
    };

    // If a pokemon is already in favourites, remove it, otherwise add it
    const toggleFavourite = (pokemon: BasePokemon) => {
        if (isFavourite(pokemon)) {
            setFavourites(favourites.filter((fav) => fav.id !== pokemon.id));
        } else {
            setFavourites([...favourites, { id: pokemon.id, name: pokemon.name, sprite: pokemon.sprite }]);
        }
    };

    return {
        totalCount: favourites.length,
        currentPage,
        setCurrentPage,
        favourites: paginateFavourites(),
        allFavourites: favourites,
        setFavourites,
        toggleFavourite,
        isFavourite,
    };

}