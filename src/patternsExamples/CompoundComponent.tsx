import { createContext, useContext, useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

// 📄 Read README file

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

////////////////////////////////////////////////////////////////////////////////
// Accordion starts
////////////////////////////////////////////////////////////////////////////////

// Accordion Root Component
const Accordion = ({ children }: { children: ReactNode }) => {
  return (
    <AccordionContextProvider>
      <div className="max-w-md mx-auto mt-10 space-y-2">{children}</div>
    </AccordionContextProvider>
  );
};

// Accordion Item Component
const AccordionItem = ({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) => {
  return <div>{children}</div>;
};

// Accordion Header Component
const AccordionHeader = ({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) => {
  const { openIndex, toggle } = useAccordionContext();
  return (
    <button
      className="flex justify-between items-center w-full p-3"
      onClick={() => toggle(index)}
    >
      <span className="font-semibold">{children}</span>
      <ChevronDown
        className={`transition-transform duration-200 ${
          openIndex === index ? "rotate-180" : "rotate-0"
        }`}
      />
    </button>
  );
};

// Accordion Body Component
const AccordionBody = ({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) => {
  const { openIndex } = useAccordionContext();

  return openIndex === index ? <div className="p-3">{children}</div> : null;
};

// Exporting compound components
Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

////////////////////////////////////////////////////////////////////////////////
// Accordion ends
////////////////////////////////////////////////////////////////////////////////

export default function CompoundComponent() {
  return (
    <Accordion>
      <Accordion.Item index={0}>
        <Accordion.Header index={0}>What is React?</Accordion.Header>
        <Accordion.Body index={0}>
          React is a JavaScript library for building user interfaces.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item index={1}>
        <Accordion.Header index={1}>What is Tailwind CSS?</Accordion.Header>
        <Accordion.Body index={1}>
          Tailwind CSS is a utility-first CSS framework for styling.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item index={2}>
        <Accordion.Header index={2}>
          How does an accordion work?
        </Accordion.Header>
        <Accordion.Body index={2}>
          An accordion expands and collapses sections dynamically.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

// initial draft
// import { createContext, ReactNode, useContext, useState } from "react";

// type AccordionContextType = {
//   openIndex: number | null;
//   toggleIndex: (index: number) => void;
// };

// const AccordionContext = createContext<AccordionContextType | undefined>(
//   undefined
// );

// const useAccordionContext = () => {
//   const context = useContext(AccordionContext);

//   if (!context) {
//     throw new Error("wrap Accordion context with Accordion Provider");
//   }

//   return context;
// };

// const Accordion = ({ children }: { children: ReactNode }) => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleIndex = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <AccordionContext.Provider value={{ openIndex, toggleIndex }}>
//       <div className="space-y-2 mx-auto max-w-md mt-10">{children}</div>
//     </AccordionContext.Provider>
//   );
// };

// const AccordionItem = ({ children }: { children: ReactNode }) => {
//   return <div>{children}</div>;
// };

// const AccordionHeader = ({
//   index,
//   children,
// }: {
//   index: number;
//   children: ReactNode;
// }) => {
//   const { toggleIndex } = useAccordionContext();
//   return (
//     <button className="w-full" onClick={() => toggleIndex(index)}>
//       {children}
//     </button>
//   );
// };

// const AccordionContent = ({
//   index,
//   children,
// }: {
//   index: number;
//   children: ReactNode;
// }) => {
//   const { openIndex } = useAccordionContext();
//   return <div>{index == openIndex ? <div>{children}</div> : null}</div>;
// };

// const CompoundComponent = () => {
//   return (
//     <div>
//       <Accordion>
//         <AccordionItem>
//           <AccordionHeader index={0}>item 1</AccordionHeader>
//           <AccordionContent index={0}>content</AccordionContent>
//         </AccordionItem>
//         <AccordionItem>
//           <AccordionHeader index={1}>item 2</AccordionHeader>
//           <AccordionContent index={1}>content</AccordionContent>
//         </AccordionItem>
//       </Accordion>
//     </div>
//   );
// };

// export default CompoundComponent;
