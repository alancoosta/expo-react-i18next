import React, { createContext, useCallback, useContext, FC } from "react";

import { useTranslation } from "react-i18next";

interface AppLocaleContext {
  handleChangeLocale(language: string): void;
}

const AppLocaleContext = createContext<AppLocaleContext>(
  {} as AppLocaleContext
);

const AppLocaleProvider: React.FC = ({ children }) => {
  const { i18n } = useTranslation();

  const handleChangeLocale = useCallback(
    (language: string) => {
      i18n.changeLanguage(language);
    },
    [i18n]
  );

  return (
    <AppLocaleContext.Provider value={{ handleChangeLocale }}>
      {children}
    </AppLocaleContext.Provider>
  );
};

const useAppLocale = (): AppLocaleContext => {
  const context = useContext(AppLocaleContext);

  if (!context) {
    throw new Error("useAppLocale must be used within an AppLocaleProvider");
  }

  return context;
};

export { AppLocaleProvider, useAppLocale };
