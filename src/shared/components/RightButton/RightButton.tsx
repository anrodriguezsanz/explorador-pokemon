import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { sharedStyles } from "../../styles/shared.styles";
import { ArrowRightOutlined } from "@ant-design/icons";
import sharedCons from "../../constants/shared.constants";


export const RightButton = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Function to navigate to next Pokemon
    const handleNext = () => {
        const currentId = Number(id);
        if (currentId < sharedCons.TOTAL_POKEMON) {
            const nextId = currentId + 1;
            navigate(`${sharedCons.POKEMON_PATH}/${nextId}`);
        }
    };

    const currentId = Number(id);
    const isLastPokemon = currentId === sharedCons.TOTAL_POKEMON;

    return (
        <Button
            type="default"
            size="large"
            onClick={handleNext}
            disabled={isLastPokemon}
            style={sharedStyles.navigateButtons}>
            <ArrowRightOutlined/>
        </Button>
    );
};