import { Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { styles } from "./styles.back.button";

interface GoBackButtonProps {
    onGoBack?: () => void;
}

export const GoBackButton = ({ onGoBack }: GoBackButtonProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Check if user came from favourites
    const fromFavourites = location.state?.from === '/favourites';

    // Navigate back to the origin (list or favourites)
    const handleGoBack = () => {
        onGoBack?.();
        navigate(fromFavourites ? '/favourites' : '/');
    };

    return (
        <Button
            type="primary"
            variant="solid"
            size="large"
            onClick={handleGoBack}
            style={styles.button}>
            {fromFavourites ? "Volver a Favoritos" : "Volver al listado"}
        </Button>
    );
};