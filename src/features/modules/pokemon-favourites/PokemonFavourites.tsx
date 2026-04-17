import { Pagination, Typography, Badge } from 'antd';
import { sharedStyles } from '../../../shared/styles/shared.styles';
import { styles } from './styles.favourites';
import { Navbar } from '../../../shared/components/Navbar/Navbar';
import { PokemonListContainer } from '../../../shared/components/PokemonListContainer/PokemonListContainer';
import { GoBackButton } from '../../../shared/components/GoBackButton/GoBackButton';
import { usePokemonFavourites } from '../../../shared/hooks/usePokemonFavourites';
import sharedCons from '../../../shared/constants/shared.constants';

const { Title } = Typography;

export const PokemonFavourites = () => {

    const { favourites, totalCount, currentPage, setCurrentPage } = usePokemonFavourites();

    return (
        <>
            <Navbar />
            <div style={sharedStyles.container}>
                <div style={styles.headerContainer}>
                    <GoBackButton />
                    <div style={styles.titleContainer}>
                        <Title level={1} style={styles.title}>
                            Favoritos
                        </Title>
                    </div>
                </div>
                {!favourites.length ? (
                    <div style={styles.emptyStateContainer}>
                        <Title level={4} style={styles.emptyState}>Todavía no tienes favoritos</Title>
                        <img 
                            src={`${sharedCons.SPRITE_URL}25.png`}
                            alt="Pikachu"
                            style={styles.emptyStateImage}
                        />
                    </div>
                ) : (
                    <PokemonListContainer pokemons={favourites} from={sharedCons.FAVOURITES_PATH} />
                )}
                <div style={sharedStyles.paginationContainer}>
                    <Pagination
                        current={currentPage}
                        total={totalCount}
                        pageSize={sharedCons.LIMIT}
                        showSizeChanger={false}
                        onChange={(page) => setCurrentPage(page)}
                    />
                </div>
            </div>
        </>
    );
};