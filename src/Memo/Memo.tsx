// 📄 Read Docs
// Read memo - https://react.dev/reference/react/memo

import React, { useState } from "react";

const MainComponent = () => {
  const [count, setCount] = useState(0);
  const [todos, _] = useState(["groceries", "cleaning"]);

  return (
    <div className="flex flex-col items-center gap-2 w-full h-screen justify-center">
      <div className="flex items-center gap-2">
        <button onClick={() => setCount(count - 1)}>-1</button>
        {count}
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>

      {/* This re-enders even if the props not changing */}
      <Memo todos={todos} />
      {/* This doesn't re-renders even if the props not changing */}
      <ReactMemo todos={todos} />
    </div>
  );
};

type Props = {
  todos: String[];
};

const Memo: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="list-disc">
      {todos.map((todo) => (
        <li key={todo as any}>{todo}</li>
      ))}
    </ul>
  );
};

const ReactMemo = React.memo(Memo);

export default MainComponent;
