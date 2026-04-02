import React, { useState, useEffect } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (includeNumbers) chars += "0123456789";
    if (includeSpecial) chars += "!@#$%^&*()_+[]{}|;:,.<>?";

    let generated = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generated += chars[randomIndex];
    }

    setPassword(generated);
  };

  // 🔥 AUTO GENERATE when dependencies change
  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSpecial]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div style={styles.container}>
      <h2>Password Generator</h2>

      {/* OUTPUT */}
      <div style={styles.outputBox}>
        <input
          type="text"
          value={password}
          readOnly
          style={styles.input}
        />
        <button onClick={copyToClipboard}>Copy</button>
      </div>

      {/* LENGTH */}
      <div style={styles.row}>
        <label>Length: {length}</label>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>

      {/* OPTIONS */}
      <div style={styles.row}>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include Numbers
        </label>
      </div>

      <div style={styles.row}>
        <label>
          <input
            type="checkbox"
            checked={includeSpecial}
            onChange={() => setIncludeSpecial(!includeSpecial)}
          />
          Include Special Characters
        </label>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "320px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "sans-serif",
  },
  outputBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "14px",
  },
  row: {
    margin: "10px 0",
  },
};