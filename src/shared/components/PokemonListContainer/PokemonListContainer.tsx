import { Row, Col } from "antd";
import { sharedStyles } from "../../styles/shared.styles";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import type { PokemonItem } from "../../../features/modules/pokemon-list/models/PokemonList";

interface PokemonListContainerProps {
    pokemons: PokemonItem[];
    from?: string;
}

export const PokemonListContainer = ({ pokemons, from }: PokemonListContainerProps) => {
    return (
        <Row gutter={[16, 16]} style={sharedStyles.listContainer}>
            {pokemons.map((pokemon) => (
                <Col
                    key={pokemon.id}
                    xs={24}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={6}
                    xxl={6}
                >
                    <PokemonCard pokemon={pokemon} from={from} />
                </Col>
            ))}
        </Row>
    );
};