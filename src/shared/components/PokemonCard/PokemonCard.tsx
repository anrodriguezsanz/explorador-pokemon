import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { PokemonItem } from '../../../features/modules/pokemon-list/models/PokemonList';
import { Card } from 'antd';
import { styles } from './styles.card';
import { Link } from 'react-router-dom';
import { HeartButton } from '../HeartButton/HeartButton';
import sharedCons from '../../constants/shared.constants';

const { Meta } = Card;

interface PokemonCardProps {
  pokemon: PokemonItem;
  from?: string;
}

export const PokemonCard = ({ pokemon, from }: PokemonCardProps) => {
  const { t } = useTranslation();
  const [imageError, setImageError] = useState(false);
  
  return (
    <>
      <Link to={`${sharedCons.POKEMON_PATH}/${pokemon.id}`} state={{ from }}>
        <Card
          hoverable
          cover={
            <div style={styles.coverContainer}>
              <div style={styles.favoriteContainer}>
                <HeartButton pokemon={pokemon} />
              </div>
              {/* Check if sprite is available. If not, renders a message */}
              {pokemon.sprite === '' || imageError ? (
                <div style={styles.noSpriteSpan}>
                  <span>{t('common.noSprite')}</span>
                </div>
              ) : (
                <img
                  alt={pokemon.name}
                  src={pokemon.sprite}
                  style={styles.image}
                  onError={() => setImageError(true)}
                />
              )}
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