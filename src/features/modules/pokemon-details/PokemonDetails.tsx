import { useParams } from 'react-router-dom';

export const PokemonDetails = () => {
  const { id } = useParams<{ id: string}>();

  return (
    <div>
      <h1>Detalles del Pokémon</h1>
      <p>ID: {id}</p>
      <p>Nombre: {id}</p>
    </div>
  );
};