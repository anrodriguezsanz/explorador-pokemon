import { Button } from "antd";
import { SoundOutlined, PauseOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { styles } from "./styles.cry.button";
import { usePokemonCry } from "../../hooks/usePokemonCry";

interface CryButtonProps {
    pokemonId: number;
}

export const CryButton = ({ pokemonId }: CryButtonProps) => {
    const { t } = useTranslation();
    const { isPlaying, playCry } = usePokemonCry(pokemonId);

    return (
        <Button style={styles.cryButton}
            icon={isPlaying ? <PauseOutlined /> : <SoundOutlined />}
            onClick={playCry}
            loading={isPlaying}>
            {isPlaying ? t('details.playing') : t('details.listenToCry')}
        </Button>
    );
};