import type { CSSProperties } from 'react';

export const cardStyles = {
  imageContainer: {
    textAlign: 'center'
  } as CSSProperties,

  image: {
    width: '100%',
    maxWidth: 300
  } as CSSProperties,

  typesContainer: {
    marginTop: 20
  } as CSSProperties,

  typeTag: {
    textTransform: 'capitalize'
  } as CSSProperties,

  title: {
    textTransform: 'capitalize'
  } as CSSProperties,

  infoRow: {
    marginBottom: 20
  } as CSSProperties,

  statContainer: {
    marginBottom: 10
  } as CSSProperties,

  statName: {
    textTransform: 'uppercase',
    fontSize: '12px'
  } as CSSProperties
};
