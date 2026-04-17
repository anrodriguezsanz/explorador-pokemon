import type { CSSProperties } from 'react';

export const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  } as CSSProperties,
  
  language: {
    color: '#ffffff',
    fontSize: '0.9rem',
    fontWeight: 500,
    cursor: 'pointer',
    opacity: 0.7,
    transition: 'opacity 0.3s ease',
    userSelect: 'none'
  } as CSSProperties,
  
  activeLanguage: {
    color: '#ffffff',
    fontSize: '0.9rem',
    fontWeight: 700,
    cursor: 'pointer',
    opacity: 1,
    textDecoration: 'none',
    userSelect: 'none'
  } as CSSProperties,
  
  separator: {
    color: '#ffffff',
    opacity: 0.5,
    userSelect: 'none'
  } as CSSProperties
};
