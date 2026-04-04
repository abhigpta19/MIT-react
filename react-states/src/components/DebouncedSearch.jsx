import { useState, useEffect, useRef } from "react";

export function DebouncedSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const debounceRef = useRef(null);

  useEffect(() => {
    if (!query) return;

    // clear previous timer
    clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      console.log("API CALL:", query);

      const res = await fetch(
        `https://api.github.com/search/users?q=${query}`
      );
      const data = await res.json();

      setResults(data.items || []);
    }, 500);

    // cleanup (important for teaching)
    return () => clearTimeout(debounceRef.current);
  }, [query]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Debounced Search</h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search..."
      />

      <ul>
        {results.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
}