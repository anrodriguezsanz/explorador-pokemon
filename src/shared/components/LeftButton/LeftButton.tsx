import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { sharedStyles } from "../../styles/shared.styles";
import { ArrowLeftOutlined } from "@ant-design/icons";
import sharedCons from "../../constants/shared.constants";


export const LeftButton = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Function to navigate to previous Pokemon
    const handlePrevious = () => {
        const currentId = Number(id);
        if (currentId > 1) {
            const previousId = currentId - 1;
            navigate(`${sharedCons.POKEMON_PATH}/${previousId}`);
        }
    };

    const currentId = Number(id);
    const isFirstPokemon = currentId <= 1;

    return (
        <Button
            type="default"
            size="large"
            onClick={handlePrevious}
            disabled={isFirstPokemon}
            style={sharedStyles.navigateButtons}>
            <ArrowLeftOutlined/>
        </Button>
    );
};