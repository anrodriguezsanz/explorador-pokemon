import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PokemonListPage } from '../features/pages/pokemon-list';
import { PokemonDetailPage } from '../features/pages/pokemon-detail';
import { FavouritesPage } from '../features/pages/favourites';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonListPage />} />

        <Route path="/pokemon/:id" element={<PokemonDetailPage />} />

        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </BrowserRouter>
  );
};