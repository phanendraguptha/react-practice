import { createContext, useContext, useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

// Context to manage Accordion state
const AccordionContext = createContext<{
  openIndex: number | null;
  toggle: (index: number) => void;
}>({
  openIndex: null,
  toggle: () => {},
});

// Accordion Root Component
const Accordion = ({ children }: { children: ReactNode }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <AccordionContext.Provider value={{ openIndex, toggle }}>
      <div className="max-w-md mx-auto mt-10 space-y-2">{children}</div>
    </AccordionContext.Provider>
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
  const { openIndex, toggle } = useContext(AccordionContext);
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
  const { openIndex } = useContext(AccordionContext);

  return openIndex === index ? <div className="p-3">{children}</div> : null;
};

// Exporting compound components
Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

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
