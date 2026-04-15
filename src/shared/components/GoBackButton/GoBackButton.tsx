import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { styles } from "./styles.back.button";

// Optional props
interface GoBackButtonProps {
    onGoBack?: () => void;
}

export const GoBackButton = ({ onGoBack }: GoBackButtonProps = {}) => {
    const navigate = useNavigate();

    // If onGoBack is provided, call it before navigating so the filters are reset
    const handleGoBack = () => {
        onGoBack?.();
        navigate('/');
    };

    return (
        <Button
            type="primary"
            variant="solid"
            size="large"
            onClick={handleGoBack}
            style={styles.button}>
            Volver al listado
        </Button>
    );
};