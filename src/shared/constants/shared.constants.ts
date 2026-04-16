const sharedCons = {
  LIMIT: 20,
  TOTAL_POKEMON: 1350,
  SPRITE_URL:  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
  NOT_FOUND_STATUS: '404' as const,
  NOT_FOUND_TITLE: 'Pokémon no encontrado',
  NOT_FOUND_SUBTITLE: 'El Pokémon que buscas no existe.',
  GO_BACK_TO_LIST: 'Volver al listado',
  GO_BACK_TO_FAVOURITES: 'Volver a Favoritos',
  FAVOURITES_PATH: '/favourites',
  HOME_PATH: '/',
  POKEMON_PATH: '/pokemon',
  NO_SPRITE_AVAILABLE: 'No hay sprites disponibles para este Pokémon'
}

export default sharedCons;
