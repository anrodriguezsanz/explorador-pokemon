import { Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { styles } from "./styles.favourites.button";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { favouritesPageAtom } from "../../../../../shared/utils/pokemon.store";

export const FavouritesButton = () => {
    const navigate = useNavigate();
    const [, setCurrentPage] = useAtom(favouritesPageAtom);

    const handleFavouritesClick = () => {
        setCurrentPage(1);
        navigate('/favourites');
    };

    return (
        <Button 
            type="primary" 
            variant="solid" 
            size="large" 
            icon={<HeartOutlined />}
            style={styles.button}
            onClick={handleFavouritesClick}>
            Favoritos
        </Button>
    );
};