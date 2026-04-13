import { Button, Spin, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { usePokemonDetails } from '../pokemon-details/hooks/usePokemonDetails';
import { styles } from './styles/details.styles';
import { sharedStyles } from '../../../shared/styles/styles';
import { Navbar } from '../../../shared/components/Navbar/Navbar';
import { DetailsCard } from './components/DetailsCard/DetailsCard';

export const PokemonDetails = () => {
  const { pokemon, isLoading } = usePokemonDetails();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        {/* Conditional rendering: loading -> spinner, not found -> 404, found -> details */}
        {isLoading ? (
          <div style={styles.spinnerContainer}>
            <Spin size="large" />
          </div>
        ) : !pokemon ? (
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
        ) : (
          <>
            <DetailsCard />
            <Button
              onClick={() => navigate('/')}
              style={sharedStyles.backButton}>
              Volver al listado
            </Button>
          </>
        )}
      </div>
    </>
  );
};