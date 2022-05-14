import React, { useReducer } from "react";

const ThemeContext = React.createContext();

const reducer = (theme, action) => {
  switch (action.type) {
    case "LIGHT_MODE":
      return { lightMode: true, darkMode: false };
    case "DARK_MODE":
      return { lightMode: false, darkMode: true };
    default:
      return theme;
  }
};

const initialState = { lightMode: true, darkMode: false };

export function ThemeContextProvider({ children }) {
  const [theme, themeDispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{ theme, themeDispatch}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
