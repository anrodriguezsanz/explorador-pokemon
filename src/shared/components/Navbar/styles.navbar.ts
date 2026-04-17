import type { CSSProperties } from 'react';

export const styles = {
  navbar: {
    background: 'linear-gradient(135deg, #3760A7 0%, #5B8FD8 100%)',
    borderBottom: '1px solid #e8e8e8',
    padding: '0',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    width: '100%'
  } as CSSProperties,

  navbarContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '32px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  } as CSSProperties,

  leftSpacer: {
    flex: 1
  } as CSSProperties,

  rightContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  } as CSSProperties,

  title: {
    margin: 0,
    color: '#ffffff',
    fontSize: '2rem',
    fontWeight: '400',
    fontFamily: "'Pokemon Solid', sans-serif",
    letterSpacing: '3px',
    textTransform: 'uppercase',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 255, 255, 0.2)',
    cursor: 'pointer',
    flex: 2,
    textAlign: 'center'
  } as CSSProperties
};
