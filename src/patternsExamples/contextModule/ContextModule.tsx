import ThemeContextProvider, { useTheme } from "./ThemeContextProvider";

// 📄 Read Docs
// Definition - The Context Module Pattern in React is a design approach that simplifies the use of the Context API
//              by encapsulating context logic into a reusable module. This pattern avoids prop drilling and
//              provides a structured way to manage shared state across components
// Read about the pattern - https://medium.com/@vitorbritto/react-design-patterns-provider-pattern-b273ba665158

const MainComponent = () => {
  return (
    <ThemeContextProvider>
      <ContextModule />
    </ThemeContextProvider>
  );
};

const ContextModule = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col items-center gap-2 w-full h-screen justify-center">
      <p className="text-2xl">{theme}</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};

export default MainComponent;
