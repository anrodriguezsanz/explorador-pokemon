import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PokemonList } from '../features/modules/pokemon-list/PokemonList';
import { PokemonDetails } from '../features/modules/pokemon-details/PokemonDetails';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList />} />

        <Route path="/pokemon/:id" element={<PokemonDetails />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};