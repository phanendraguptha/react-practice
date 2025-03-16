import { FC, ReactNode, createContext, useContext, useState } from "react";

// This is a helper file for the ContextModule, However this is the pattern you are looking for

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// 1. create a context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 2. create a provider component
const ThemeContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. create a consumer hook
const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  // Throws error if anyone tries to use the useTheme without wrapping with the provider
  if (!themeContext) {
    throw new Error("useTheme must be within ThemeContextProvider");
  }

  return themeContext;
};

export default ThemeContextProvider;
export { useTheme };
