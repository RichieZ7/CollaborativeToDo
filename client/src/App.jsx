import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Call the backend when the page loads
    fetch("http://localhost:4000")
      .then((res) => res.json())        // read JSON response
      .then((data) => setMessage(data.message)) // save "message" into state
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Collaborative To-Do App</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
