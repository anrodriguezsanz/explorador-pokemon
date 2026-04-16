import { Button } from "antd";
import { SoundOutlined, PauseOutlined } from "@ant-design/icons";
import { styles } from "./styles.cry.button";
import constants from "../../constants/constants.detail";
import { usePokemonCry } from "../../hooks/usePokemonCry";

interface CryButtonProps {
    pokemonId: number;
}

export const CryButton = ({ pokemonId }: CryButtonProps) => {

    const { isPlaying, playCry } = usePokemonCry(pokemonId);

    return (
        <Button style={styles.cryButton}
            icon={isPlaying ? <PauseOutlined /> : <SoundOutlined />}
            onClick={playCry}
            loading={isPlaying}>
            {isPlaying ? constants.PLAYING : constants.LISTEN_TO_CRY}
        </Button>
    );
};