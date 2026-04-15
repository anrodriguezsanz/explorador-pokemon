import { Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { styles } from "./styles.favourites.button";
import { useNavigate } from "react-router-dom";

export const FavouritesButton = () => {
    const navigate = useNavigate();
    return (
        <Button 
            type="primary" 
            variant="solid" 
            size="large" 
            icon={<HeartOutlined />}
            style={styles.button}
            onClick={() => navigate('/favourites')}>
            Favoritos
        </Button>
    );
};