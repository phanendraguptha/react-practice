// useEffect - https://react.dev/reference/react/useEffect
// Definition - The `useEffect` hook in React is used to perform side effects such as data fetching, DOM manipulation, or subscriptions after a component renders. It takes two arguments: a function (effect) and an optional dependency array to control when the effect runs
// Rules of Hooks - https://react.dev/reference/rules/rules-of-hooks

import { useEffect, useState } from "react";

// 📄 Read Docs

/**
 * Pauses the execution of code for a specified amount of time.
 *
 * @param {number} time - The duration to sleep in milliseconds.
 * @returns {Promise<void>} A promise that resolves after the specified time.
 *
 * @example
 * // Pause execution for 2 seconds
 * await sleep(2000);
 */
const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

const MainComponent = () => {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2 w-full h-screen justify-center">
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? "Hide" : "Show"} Component
      </button>
      {showComponent && <UseEffect />}
    </div>
  );
};

const UseEffect = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);
      try {
        await sleep(5000);

        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal,
        });
        const data = await res.json();

        setUsers(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();

    // cleanup function
    return () => {
      // Abort the fetch request to avoid memory leaks or redundant processing.
      // comment to see the diff in network
      controller.abort();
    };
  }, []);

  return (
    <>
      {loading && <div>loading..</div>}

      {!loading && (
        <ul className="list-disc">
          {users.map((user: any) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MainComponent;
