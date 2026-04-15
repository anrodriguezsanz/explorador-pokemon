import type { CSSProperties } from 'react';

export const styles = {
  coverContainer: {
    padding: '20px',
    textAlign: 'center'
  } as CSSProperties,

  image: {
    height: 120,
    objectFit: 'contain'
  } as CSSProperties,

  titleSpan: {
    textTransform: 'capitalize'
  } as CSSProperties,

  favoriteContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  } as CSSProperties
};
