import { List, Pagination, Spin, Select } from 'antd';
import { usePokemonList } from './hooks/usePokemonList';
import { PokemonCard } from './components/PokemonCard/PokemonCard';
import { styles } from './styles/styles.list';
import { Navbar } from '../../../shared/components/Navbar/Navbar';
import { usePokemonTypes } from './hooks/usePokemonType';


export const PokemonList = () => {
  const {
    pokemons,
    isLoading,
    totalCount,
    currentPage,
    setCurrentPage,
    LIMIT
  } = usePokemonList();

  const { types, selectedType, setSelectedType } = usePokemonTypes();

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.filterContainer}>
          {/* Type filter dropdown */}
          <Select
            placeholder="Filtrar por tipo..."
            style={styles.select}
            value={selectedType || undefined}
            allowClear={true}
            onChange={(value) => setSelectedType(value || '')}
            options={types.map(type => ({
              label: <span style={styles.selectLabel}>{type}</span>,
              value: type
            }))}
          />
        </div>
        {/* Conditional rendering: loading -> spinner, otherwise -> list */}
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