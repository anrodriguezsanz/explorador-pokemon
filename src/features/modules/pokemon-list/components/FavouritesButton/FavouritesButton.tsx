import { Button, Badge } from "antd";
import { HeartFilled } from "@ant-design/icons";
import { styles } from "./styles.favourites.button";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { favouritesPageAtom, favouritesAtom } from "../../../../../shared/utils/pokemon.store";
import sharedCons from "../../../../../shared/constants/shared.constants";

export const FavouritesButton = () => {
    const navigate = useNavigate();
    const [, setCurrentPage] = useAtom(favouritesPageAtom);
    const [favourites] = useAtom(favouritesAtom);

    const handleFavouritesClick = () => {
        setCurrentPage(1);
        navigate(sharedCons.FAVOURITES_PATH);
    };

    return (
        <Badge count={favourites.length} offset={[-5, 5]} color="#D32B2B">
            <Button 
                type="primary" 
                variant="solid" 
                size="large" 
                icon={<HeartFilled />}
                style={styles.button}
                onClick={handleFavouritesClick}>
                Favoritos
            </Button>
        </Badge>
    );
};