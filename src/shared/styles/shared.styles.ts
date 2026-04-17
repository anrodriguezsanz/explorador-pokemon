import type { CSSProperties } from 'react';

export const sharedStyles = {
  container: {
    padding: '40px',
    maxWidth: '1200px',
    width: '100%',
    margin: '20px auto 0 auto'
  } as CSSProperties,

  listContainer: {
    border: 'none',
    padding: 0
  } as CSSProperties,

  paginationContainer: {
    textAlign: 'center',
    marginTop: '40px'
  } as CSSProperties,

  spinnerContainer: {
    textAlign: 'center',
    marginTop: '60px'
  } as CSSProperties
};
