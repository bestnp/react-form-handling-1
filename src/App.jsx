import { useState } from "react";
import "./App.css";

function App() {
  // ข้อความที่แสดงในกล่องสีเขียวฟ้า
  const [greeting, setGreeting] = useState("Greeting Message");
  // ค่าที่ผู้ใช้พิมพ์ใน input (controlled)
  const [draft, setDraft] = useState("");

  const handleUpdate = () => {
    setGreeting(draft);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleUpdate();
  };

  return (
    <div className="App">
      <div
        className="greeting-container"
        aria-live="polite"
        aria-label="Greeting Message"
      >
        {greeting}
      </div>

      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your greeting here"
        />
      </div>

      <div className="buttons">
        <button onClick={handleUpdate}>Update text</button>
      </div>
    </div>
  );
}

export default App;
