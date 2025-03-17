import { useState } from "react";

// calls all functions with its arguments
const callAll =
  (...fns: Array<((...args: any[]) => void) | undefined>) =>
  (...args: any[]) =>
    fns.forEach((fn) => fn?.(...args));

interface TogglerProps extends React.ButtonHTMLAttributes<HTMLElement> {
  onClick?: (event: React.MouseEvent) => void;
}

////////////////////////////////////////////////////////////////////////////////
// pattern starts
////////////////////////////////////////////////////////////////////////////////

const useToggle = () => {
  const [on, setOn] = useState<boolean>(false);
  const toggle = () => setOn(!on);

  const getTogglerProps = ({ onClick, ...props }: TogglerProps = {}) => {
    return {
      "aria-pressed": on,
      onClick: callAll(onClick, toggle), //combine onclick with toggle
      ...props, // Merges all other user-defined props
    };
  };

  return {
    on,
    toggle,
    getTogglerProps,
  };
};

////////////////////////////////////////////////////////////////////////////////
// pattern ends
////////////////////////////////////////////////////////////////////////////////

const PropGetters = () => {
  const { on, getTogglerProps } = useToggle();

  return (
    <div className="flex flex-col items-center justify-center space-y-4 h-screen w-full">
      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          className="w-5 h-5 accent-lime-500 cursor-pointer"
          checked={on}
          // pattern usage - same props shared
          {...getTogglerProps({
            onClick: (e) => e.stopPropagation(),
          })}
        />
        <span>Toggle</span>
      </label>
      <button
        // pattern usage - same props shared
        {...getTogglerProps({
          onClick: () => console.log("button clicked"),
          id: "i-can-also-give-id",
        })}
      >
        {on ? "On" : "Off"}
      </button>
    </div>
  );
};

export default PropGetters;
