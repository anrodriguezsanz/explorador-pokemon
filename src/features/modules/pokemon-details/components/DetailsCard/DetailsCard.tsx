import { Card, Col, Row, Typography, Tag, Progress } from 'antd';
import { usePokemonDetails } from '../../hooks/usePokemonDetails';
import { cardStyles as styles } from './card.styles';

const { Title, Text } = Typography;

export const DetailsCard = () => {
    const { pokemon } = usePokemonDetails();

    if (!pokemon) return null;
    return (
        <>
            <Card>
                <Row gutter={[32, 32]} align="middle">
                    {/* LEFT COLUMN: IMAGE AND TYPES */}
                    <Col xs={24} md={10} style={styles.imageContainer}>
                        <img src={pokemon.image} alt={pokemon.name} style={styles.image} />
                        {/* Maps de types array and renders a Tag for each type */}
                        <div style={styles.typesContainer}>
                            {pokemon.types.map(type => (
                                <Tag key={type} color="blue" style={styles.typeTag}>{type}</Tag>
                            ))}
                        </div>
                    </Col>

                    {/* RIGHT COLUMN: INFO AND STATS */}
                    <Col xs={24} md={14}>
                        <Title level={2} style={styles.title}>{pokemon.name}</Title>

                        {/* Displays height and weight converted to meters and kilograms */}
                        <Row style={styles.infoRow}>
                            <Col span={12}><Text strong>Altura:</Text> {pokemon.height / 10} m</Col>
                            <Col span={12}><Text strong>Peso:</Text> {pokemon.weight / 10} kg</Col>
                        </Row>

                        <Title level={4}>Stats</Title>
                        {/* Maps the stats array and renders a progress bar for each */}
                        {pokemon.stats.map(stat => (
                            <div key={stat.name} style={styles.statContainer}>
                                <Text style={styles.statName}>{stat.name}</Text>
                                <Progress
                                    percent={stat.value}
                                    success={{ percent: 0 }}
                                    format={() => stat.value}
                                    status="normal"
                                />
                            </div>
                        ))}
                    </Col>
                </Row>
            </Card>
        </>
    );
};