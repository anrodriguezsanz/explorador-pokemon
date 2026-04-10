import { List, Pagination, Spin, Typography } from 'antd';
import { usePokemonList } from './hooks/usePokemonList';
import { PokemonCard } from './components/PokemonCard/PokemonCard';
import { styles } from './styles/styles.list';

const { Title } = Typography;

export const PokemonList = () => {
  const { 
    pokemons, 
    isLoading, 
    totalCount, 
    currentPage, 
    setCurrentPage, 
    LIMIT 
  } = usePokemonList();

  return (
    <>
      <nav style={styles.navbar}>
        <div style={styles.navbarContent}>
          <Title level={2} style={styles.title}>
            POKÉPEDIA
          </Title>
        </div>
      </nav>

      <div style={styles.container}>
        {isLoading ? (
          <div style={styles.spinnerContainer}>
            <Spin size="large" />
          </div>
        ) : (
          <>
            <List
              bordered={false}
              style={styles.listContainer}
              grid={{
                gutter: 16,
                column: 5,
                xs: 1, 
                sm: 2, 
                md: 3, 
                lg: 4, 
                xl: 5,
              }}
              dataSource={pokemons}
              renderItem={(pokemon) => (
                <List.Item>
                  <PokemonCard pokemon={pokemon} />
                </List.Item>
              )}
            />

            {/* Pagination bar */}
            <div style={styles.paginationContainer}>
              <Pagination
                current={currentPage}
                total={totalCount}
                pageSize={LIMIT}
                showSizeChanger={false} 
                onChange={(page) => setCurrentPage(page)} 
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};