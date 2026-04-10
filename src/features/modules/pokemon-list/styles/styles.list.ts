import type { CSSProperties } from 'react';

export const styles = {
  navbar: {
    background: '#852b2b',
    borderBottom: '1px solid #e8e8e8',
    padding: '0',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    width: '100vw'
  } as CSSProperties,

  navbarContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '32px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as CSSProperties,

  title: {
    margin: 0,
    color: '#ffffff',
    fontSize: '1.5rem',
    fontWeight: '700',
    letterSpacing: '0.5px'
  } as CSSProperties,

  container: {
    padding: '40px',
    maxWidth: '1200px',
    margin: '140px auto 0 auto'
  } as CSSProperties,

  listContainer: {
    border: 'none',
    padding: 0
  } as CSSProperties,

  spinnerContainer: {
    textAlign: 'center',
    marginTop: '60px'
  } as CSSProperties,

  paginationContainer: {
    textAlign: 'center',
    marginTop: '40px'
  } as CSSProperties
};
