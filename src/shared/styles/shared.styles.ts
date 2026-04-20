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
  } as CSSProperties,

  navigateButtons: {
    color: '#357ABD',
    borderColor: '#357ABD',
    borderRadius: '25px',
    fontWeight: 600,
    boxShadow: '0 1px 6px rgba(74, 144, 226, 0.3)',
    padding: '8px 24px',
    height: 'auto',
    transition: 'all 0.3s ease' 
  } as CSSProperties
};
