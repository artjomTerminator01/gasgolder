'use client';
import React, { ReactNode, useContext, useState, Dispatch, SetStateAction } from 'react';
interface LocaleContextState {
  currentLocale: string;
  setCurrentLocale: Dispatch<SetStateAction<string>>;
}

const LocaleContext = React.createContext<LocaleContextState>({
  currentLocale: 'et', // Default value
  setCurrentLocale: () => {}, // Placeholder function
});

const LocaleContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentLocale, setCurrentLocale] = useState<string>('et');

  return <LocaleContext.Provider value={{ currentLocale, setCurrentLocale }}>{children}</LocaleContext.Provider>;
};

export const useLocaleContext = () => useContext(LocaleContext);

export default LocaleContextProvider;
