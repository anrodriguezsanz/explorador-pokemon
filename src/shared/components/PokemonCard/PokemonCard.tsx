import type { PokemonItem } from '../../../features/modules/pokemon-list/models/PokemonList';
import { Card } from 'antd';
import { styles } from './styles.card';
import { Link } from 'react-router-dom';
import { HeartButton } from '../HeartButton/HeartButton';

const { Meta } = Card;

interface PokemonCardProps {
  pokemon: PokemonItem;
  from?: string;
}

export const PokemonCard = ({ pokemon, from }: PokemonCardProps) => {
  
  return (
    <>
      <Link to={`/pokemon/${pokemon.id}`} state={{ from }}>
        <Card
          hoverable
          cover={
            <div style={styles.coverContainer}>
              <div style={styles.favoriteContainer}>
                <HeartButton pokemon={pokemon} />
              </div>
              <img
                alt={pokemon.name}
                src={pokemon.sprite}
                style={styles.image}
              />
            </div>
          }
        >
          <Meta
            title={<span style={styles.titleSpan}>{pokemon.name}</span>}
            description={pokemon.id}
          />
        </Card>
      </Link>
    </>

  );
};