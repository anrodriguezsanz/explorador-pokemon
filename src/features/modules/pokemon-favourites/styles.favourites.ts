import type { CSSProperties } from 'react';

export const styles = {
  buttonContainer: {
    marginBottom: 24,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 40
  } as CSSProperties,

  title: {
    color: '#3760A7',
    fontWeight: 'bold'
  } as CSSProperties,

  emptyStateContainer: {
    textAlign: 'center',
    padding: 48
  } as CSSProperties,

  emptyState: {
    color: '#3760A7',
    marginBottom: 24
  } as CSSProperties,

  emptyStateImage: {
    width: 150,
    height: 150,
    objectFit: 'contain'
  } as CSSProperties
};
