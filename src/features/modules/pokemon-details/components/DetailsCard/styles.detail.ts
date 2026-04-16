import type { CSSProperties } from 'react';

export const cardStyles = {
  heartButtonContainer: {
    marginTop: 24,
    display: 'flex',
    justifyContent: 'center'
  } as CSSProperties,

  imageContainer: {
    textAlign: 'center'
  } as CSSProperties,

  image: {
    width: '100%',
    maxWidth: 300
  } as CSSProperties,

  typesContainer: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    gap: 10
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
  } as CSSProperties,

  noImageSpan: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    margin: '20px 70px 0 30px',
    fontWeight: 'bold',
    color: '#3760A7'
  } as CSSProperties
};
