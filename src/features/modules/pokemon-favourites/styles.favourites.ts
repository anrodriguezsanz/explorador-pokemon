import type { CSSProperties } from 'react';

export const styles = {
  headerContainer: {
    margin: '20px auto 36px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '20px'
  } as CSSProperties,

  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    width: '100%'
  } as CSSProperties,

  title: {
    margin: '0 auto 30px auto',
    background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontSize: '2.5rem',
    fontWeight: 700,
    textAlign: 'center'
  } as CSSProperties,

  badge: {
    backgroundColor: '#4A90E2',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '8px 16px',
    height: 'auto',
    lineHeight: '1.5',
    boxShadow: '0 2px 8px rgba(74, 144, 226, 0.3)'
  } as CSSProperties,

  emptyStateContainer: {
    textAlign: 'center',
    padding: 20
  } as CSSProperties,

  emptyState: {
    color: '#357ABD',
    marginBottom: 24
  } as CSSProperties,

  emptyStateImage: {
    width: 150,
    height: 150,
    objectFit: 'contain'
  } as CSSProperties
};
