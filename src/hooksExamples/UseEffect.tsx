import { useEffect, useState } from "react";

const MainComponent = () => {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <>
      <button onClick={() => setShowComponent(!showComponent)}>
        show/hide
      </button>
      {showComponent && <UseEffect />}
    </>
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
        <>
          {users.map((user: any) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </>
      )}
    </>
  );
};

export default MainComponent;
