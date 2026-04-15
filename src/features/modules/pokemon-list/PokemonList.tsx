import { Pagination, Spin, Select, Input } from 'antd';
import { usePokemonList } from './hooks/usePokemonList';
import { PokemonListContainer } from '../../../shared/components/PokemonListContainer/PokemonListContainer';
import { styles } from './styles/styles.list';
import { sharedStyles } from '../../../shared/styles/shared.styles';
import { Navbar } from '../../../shared/components/Navbar/Navbar';
import { usePokemonTypes } from './hooks/usePokemonType';
import { NotFoundResult } from '../../../shared/components/NotFoundResult/NotFoundResult';
import { FavouritesButton } from './components/FavouritesButton/FavouritesButton';
import listCons from './constants/list.constants';

const { Search } = Input;

export const PokemonList = () => {

  const {
    pokemons,
    isLoading,
    totalCount,
    currentPage,
    setCurrentPage,
    searchQuery,
    setSearchQuery,
    LIMIT
  } = usePokemonList();

  const { types, selectedType, setSelectedType } = usePokemonTypes();

  // Function to reset filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedType('');
  };

  return (
    <>
      <Navbar />
      <div style={sharedStyles.container}>
        {/* Filter container */}
        <div style={styles.filterContainer}>
          <FavouritesButton />
          <div style={styles.filtersGroup}>
            <Search
              placeholder={listCons.SEARCH_QUERY_PLACEHOLDER}
              allowClear
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.search}
            />

            <Select
              placeholder={listCons.FILTER_BY_TYPE_PLACEHOLDER}
              allowClear
              style={styles.select}
              value={selectedType || undefined}
              onChange={(value) => setSelectedType(value || '')}
              options={types.map(type => ({
                label: <span style={styles.selectLabel}>{type}</span>,
                value: type
              }))}
            />
          </div>
        </div>

        {/* Conditional rendering: loading -> spinner, no pokemons -> not found message, otherwise -> list */}
        {isLoading ? (
          <div style={sharedStyles.spinnerContainer}>
            <Spin size="large" />
          </div>
        ) : !pokemons.length ? (
          <NotFoundResult onGoBack={resetFilters} />
        ) : (
          <>
            <PokemonListContainer pokemons={pokemons} />
            {/* Pagination bar */}
            <div style={sharedStyles.paginationContainer}>
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