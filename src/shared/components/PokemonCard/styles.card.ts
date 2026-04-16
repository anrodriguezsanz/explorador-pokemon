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
  } as CSSProperties,

  noSpriteSpan: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    margin: '20px 70px 0 30px',
    fontWeight: 'bold',
    color: '#3760A7'
  } as CSSProperties
};
