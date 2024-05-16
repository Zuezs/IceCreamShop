import { createContext } from 'react';

export const IceCreamContext = createContext<{ flavors: string[], filter: string, updateFilter: (filter: string) => void }>({} as any);
