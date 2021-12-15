import { createContext, useContext } from 'react';

export const SpendingContext = createContext({
  spendings: {},
  setSpendings: () => {}
});

export function useSpendings() {
  return useContext(SpendingContext);
}