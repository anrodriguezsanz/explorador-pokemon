import { Card, Col, Row, Typography, Tag, Progress } from 'antd';
import { useTranslation } from 'react-i18next';
import { usePokemonDetails } from '../../hooks/usePokemonDetails';
import { cardStyles as styles } from './styles.detail';
import { HeartButton } from '../../../../../shared/components/HeartButton/HeartButton';
import { CryButton } from '../CryButton/CryButton';
import { useState } from 'react';
import type { BasePokemon } from '../../../../../shared/models/Pokemon';
import sharedCons from '../../../../../shared/constants/shared.constants';

const { Title, Text } = Typography;

export const DetailsCard = () => {
    const { t } = useTranslation();
    const { pokemon } = usePokemonDetails();
    const [imageError, setImageError] = useState(false);

    if (!pokemon) return null;

    // Create BasePokemon object for HeartButton
    const basePokemon: BasePokemon = {
        id: pokemon.id,
        name: pokemon.name,
        sprite: `${sharedCons.SPRITE_URL}${pokemon.id}.png`
    };

    return (
        <>
            <Card>
                <Row gutter={[32, 32]} align="middle">
                    {/* LEFT COLUMN: IMAGE AND TYPES */}
                    <Col xs={24} md={10} style={styles.imageContainer}>
                        {!pokemon.image || imageError ? (
                            <div style={styles.noImageSpan}>
                                <span>{t('details.noImage')}</span>
                            </div>
                        ) : (
                            <img 
                                src={pokemon.image} 
                                alt={pokemon.name} 
                                style={styles.image} 
                                onError={() => setImageError(true)} 
                            />
                        )}
                        {/* Maps The types array and renders a Tag for each type */}
                        <div style={styles.typesContainer}>
                            {pokemon.types.map(type => (
                                <Tag key={type} color="blue" style={styles.typeTag}>{t(`types.${type}`)}</Tag>
                            ))}
                        </div>
                        <CryButton pokemonId={pokemon.id} />
                        <div style={styles.heartButtonContainer}>
                            <HeartButton pokemon={basePokemon} large />
                        </div>
                    </Col>

                    {/* RIGHT COLUMN: INFO AND STATS */}
                    <Col xs={24} md={14}>
                        <Title level={2} style={styles.title}>{pokemon.name}</Title>

                        {/* Displays height and weight converted to meters and kilograms */}
                        <Row style={styles.infoRow}>
                            <Col span={12}><Text strong>{t('details.height')}:</Text> {pokemon.height / 10} m</Col>
                            <Col span={12}><Text strong>{t('details.weight')}:</Text> {pokemon.weight / 10} kg</Col>
                        </Row>

                        <Title level={4}>{t('details.stats')}</Title>
                        {/* Maps the stats array and renders a progress bar for each */}
                        {pokemon.stats.map(stat => (
                            <div key={stat.name} style={styles.statContainer}>
                                <Text style={styles.statName}>{t(`stats.${stat.name}`)}</Text>
                                <Progress
                                    percent={stat.value}
                                    success={{ percent: 0 }}
                                    format={() => stat.value}
                                    status="normal"
                                    strokeColor="#FECA1B"
                                />
                            </div>
                        ))}
                    </Col>
                </Row>
            </Card>
        </>
    );
};