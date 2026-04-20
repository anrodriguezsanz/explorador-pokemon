import { useNavigate } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import { selectedTypeAtom, currentPageAtom } from '../utils/pokemon.store';
import sharedCons from '../constants/shared.constants';

export const useTypeNavigation = () => {
    const navigate = useNavigate();
    const setSelectedType = useSetAtom(selectedTypeAtom);
    const setCurrentPage = useSetAtom(currentPageAtom);

    // Navigate to the home page with the selected type
    const navigateToType = (type: string) => {
        setSelectedType(type);
        setCurrentPage(1);
        navigate(sharedCons.HOME_PATH);
    };

    return { navigateToType };
};
