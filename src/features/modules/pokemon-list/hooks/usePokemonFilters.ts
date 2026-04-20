import { useAtom, useAtomValue } from 'jotai';
import { selectedTypeAtom, searchQueryAtom, currentPageAtom, sortAtom } from '../../../../shared/utils/pokemon.store';
import { useDebounce } from '../../../../shared/hooks/useDebounce';

export const usePokemonFilters = () => {
    const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
    const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
    const [selectedType, setSelectedType] = useAtom(selectedTypeAtom);
    const sortOrder = useAtomValue(sortAtom);
    
    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    // Reset filters
    const resetFilters = () => {
        setSearchQuery('');
        setSelectedType('');
    };

    return {
        searchQuery,
        setSearchQuery,
        debouncedSearchQuery,
        currentPage,
        setCurrentPage,
        selectedType,
        setSelectedType,
        sortOrder,
        resetFilters
    };
};
