import React from "react";

import { AppLocaleProvider } from "./locale";

const AppProvider: React.FC = ({ children }) => {
  return <AppLocaleProvider>{children}</AppLocaleProvider>;
};

export default AppProvider;
