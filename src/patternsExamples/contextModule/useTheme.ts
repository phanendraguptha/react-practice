import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";

// 3. create a consumer hook
const useTheme = () => {
    const themeContext = useContext(ThemeContext);

    // Throws error if anyone tries to use the useTheme without wrapping with the provider
    if(!themeContext){
        throw new Error("useTheme must be within ThemeContextProvider")
    }

    return themeContext;
}

export {useTheme};