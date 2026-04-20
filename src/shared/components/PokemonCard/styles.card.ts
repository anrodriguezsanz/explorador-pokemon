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
    height: 120,
    padding: '0 50px',
    fontWeight: 'bold',
    color: '#1890ff',
    textAlign: 'center',
    maxWidth: '100%',
    boxSizing: 'border-box'
  } as CSSProperties,

  noSpriteText: {
    display: 'block',
    width: '100%',
    wordWrap: 'break-word'
  } as CSSProperties
};
