// 📄 Read Docs
// useLayoutEffect - https://react.dev/reference/react/useLayoutEffect
// Definition - The useLayoutEffect hook is similar to useEffect, but it fires synchronously after all DOM mutations.
//              This is useful for measuring DOM elements and making DOM mutations that need to be visible to the user
//              before the next paint.
// Rules of Hooks - https://react.dev/reference/rules/rules-of-hooks

import { useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffect = () => {
  const [value, setValue] = useState("");

  // Ref to access DOM element
  const ref = useRef<HTMLDivElement | null>(null);

  // Measure element dimensions synchronously, runs after DOM mutations but before browser paint
  useLayoutEffect(() => {
    // Get element's position and dimensions
    const rect = ref.current?.getBoundingClientRect();
    // Convert measurements to JSON string for display
    setValue(JSON.stringify(rect?.toJSON()));
  }, []); // Empty dependency array means it runs once on mount

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center space-y-4">
      <div ref={ref} className="text-2xl font-bold">
        UseLayoutEffect example
      </div>

      <div>
        positioning of ref is
        {value}
      </div>
    </div>
  );
};

export default UseLayoutEffect;
