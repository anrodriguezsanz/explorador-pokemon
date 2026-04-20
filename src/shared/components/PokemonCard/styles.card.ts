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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    padding: '0 30px',
    fontSize: '14px',
    fontWeight: 500,
    color: '#6b7280',
    textAlign: 'center',
    maxWidth: '100%',
    boxSizing: 'border-box',
    lineHeight: '1.5'
  } as CSSProperties,

  noSpriteText: {
    display: 'block',
    width: '100%',
    wordWrap: 'break-word'
  } as CSSProperties,

  noSpriteIcon: {
    fontSize: '32px',
    marginBottom: '8px'
  } as CSSProperties
};
