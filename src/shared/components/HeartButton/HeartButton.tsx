import { Button } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { usePokemonFavourites } from "../../hooks/usePokemonFavourites";
import type { BasePokemon } from "../../models/Pokemon";

interface HeartButtonProps {
    pokemon: BasePokemon;
    large?: boolean;
}

export const HeartButton = ({pokemon, large = false}: HeartButtonProps) => {

    const { toggleFavourite, isFavourite } = usePokemonFavourites();
    
    const iconStyle = large ? { fontSize: '32px' } : {};
    
    return (
                <Button 
                  type="text" 
                  size="large" 
                  icon={isFavourite(pokemon) ? 
                    <HeartFilled style={{ color: '#D32B2B', ...iconStyle }} /> : 
                    <HeartOutlined style={{ color: '#D32B2B', ...iconStyle }} />
                  } 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavourite(pokemon);
                  }} 
                />
    );
};