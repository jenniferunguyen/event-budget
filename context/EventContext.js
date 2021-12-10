import { createContext, useContext } from 'react';

export const EventContext = createContext({
  events: {},
  setEvents: () => {}
});

export function useEvents() {
  return useContext(EventContext);
}