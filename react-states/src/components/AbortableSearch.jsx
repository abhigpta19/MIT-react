import { useState, useEffect, useRef } from "react";

export function AbortableSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const controllerRef = useRef(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      // abort previous request
      if (controllerRef.current) {
        controllerRef.current.abort();
      }

      const controller = new AbortController();
      controllerRef.current = controller;

      try {
        console.log("API CALL:", query);

        const res = await fetch(
          `https://api.github.com/search/users?q=${query}`,
          { signal: controller.signal }
        );

        const data = await res.json();
        setResults(data.items || []);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Request Aborted");
        } else {
          console.error(err);
        }
      }
    };

    fetchData();

    // cleanup (optional but good practice)
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, [query]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Abortable Search</h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type fast..."
      />

      <ul>
        {results.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
}