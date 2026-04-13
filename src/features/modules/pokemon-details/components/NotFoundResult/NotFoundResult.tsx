import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { sharedStyles } from "../../../../../shared/styles/styles";

export const NotFoundResult = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <Result
                status="404"
                title="Pokémon no encontrado"
                subTitle="Lo sentimos, el Pokémon que buscas no existe."
                extra={
                    <Button
                        onClick={() => navigate('/')}
                        style={sharedStyles.backButton}>
                        Volver al listado
                    </Button>
                }
            />
        </>
    );
};