// This is a helper file for the CompoundComponent, this file follows context module pattern
// ⚠️ Read README file before proceeding further

import { createContext, ReactNode, useContext, useState } from "react";

// Context to manage Accordion state
const AccordionContext = createContext<{
  openIndex: number | null;
  toggle: (index: number) => void;
}>({
  openIndex: null,
  toggle: () => {},
});

// create a provider component
const AccordionContextProvider = ({ children }: { children: ReactNode }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <AccordionContext.Provider value={{ openIndex, toggle }}>
      {children}
    </AccordionContext.Provider>
  );
};

// create a consumer hook
const useAccordionContext = () => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("wrap Accordion context with Accordion Provider");
  }

  return context;
};

export default AccordionContextProvider;
export { useAccordionContext };
