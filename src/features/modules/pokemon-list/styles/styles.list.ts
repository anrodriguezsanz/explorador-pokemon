import type { CSSProperties } from 'react';

export const styles = {
  filterContainer: {
    marginBottom: 24,
    display: 'flex',
    justifyContent: 'space-between',
    gap: '16px',
    flexWrap: 'wrap',
    alignItems: 'center'
  } as CSSProperties,

  search: {
    width: 250
  } as CSSProperties,

  select: {
    width: 200
  } as CSSProperties,

  selectLabel: {
    textTransform: 'capitalize'
  } as CSSProperties,

  filtersGroup: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  } as CSSProperties
};
