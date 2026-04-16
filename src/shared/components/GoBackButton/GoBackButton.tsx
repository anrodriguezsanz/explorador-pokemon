import { Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { styles } from "./styles.back.button";
import sharedCons from "../../constants/shared.constants";

interface GoBackButtonProps {
    onGoBack?: () => void;
}

export const GoBackButton = ({ onGoBack }: GoBackButtonProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Check if user came from favourites
    const fromFavourites = location.state?.from === sharedCons.FAVOURITES_PATH;

    // Navigate back to the origin (list or favourites)
    const handleGoBack = () => {
        onGoBack?.();
        navigate(fromFavourites ? sharedCons.FAVOURITES_PATH : sharedCons.HOME_PATH);
    };

    return (
        <Button
            type="primary"
            variant="solid"
            size="large"
            onClick={handleGoBack}
            style={styles.button}>
            {fromFavourites ? sharedCons.GO_BACK_TO_FAVOURITES : sharedCons.GO_BACK_TO_LIST}
        </Button>
    );
};