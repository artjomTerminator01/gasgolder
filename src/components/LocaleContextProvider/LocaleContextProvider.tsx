'use client';
import React, { ReactNode, useContext, useState } from 'react';
const LocaleContext = React.createContext({});

const LocaleContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentLocale, setCurrentLocale] = useState('et');

  return <LocaleContext.Provider value={{ currentLocale, setCurrentLocale }}>{children}</LocaleContext.Provider>;
};

export const useLocaleContext = () => useContext(LocaleContext);

export default LocaleContextProvider;
