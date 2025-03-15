import { useEffect, useState } from "react";

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

    const sleep = (time: number) => {
      return new Promise((resolve) => {
        setTimeout(resolve, time);
      });
    };

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

    return () => {
      controller.abort(); //comment to see the diff in network
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
