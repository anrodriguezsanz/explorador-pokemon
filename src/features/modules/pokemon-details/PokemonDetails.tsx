import { Spin } from 'antd';
import { usePokemonDetails } from '../pokemon-details/hooks/usePokemonDetails';
import { styles } from './styles/details.styles';
import { Navbar } from '../../../shared/components/Navbar/Navbar';
import { DetailsCard } from './components/DetailsCard/DetailsCard';
import { NotFoundResult } from '../../../shared/components/NotFoundResult/NotFoundResult';
import { GoBackButton } from '../../../shared/components/GoBackButton/GoBackButton';

export const PokemonDetails = () => {
  const { pokemon, isLoading } = usePokemonDetails();

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
          <NotFoundResult />
        ) : (
          <>
            <DetailsCard />
            <div style={styles.buttonContainer}>
              <GoBackButton />
            </div>
          </>
        )}
      </div>
    </>
  );
};