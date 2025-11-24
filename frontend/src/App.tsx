import { useEffect } from "react";

export function App() {
  function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => console.log(JSON.stringify(data)));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>Teste</p>
    </div>
  );
}
