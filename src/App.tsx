import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    const res = await axios.post("http://127.0.0.1:8080/paraphrase", {
      text: input,
    });
    setResult(res.data.paraphrased);
  };

  return (
    <div>
      <Header />
      <div style={styles.container}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to paraphrase..."
          rows={6}
          cols={60}
        />
        <br />
        <button onClick={handleSubmit} style={styles.button}>
          Paraphrase
        </button>

        <div style={styles.result}>
          <strong>Paraphrased Text:</strong>
          <p>{result}</p>
        </div>
      </div>
        <Footer />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "2rem 1rem",
    maxWidth: "700px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  textarea: {
    width: "100%",
    padding: "1rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    resize: "vertical",
  },
  button: {
    padding: "0.75rem 1.25rem",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    alignSelf: "flex-start",
  },
  result: {
    background: "#e8f5e9",
    padding: "1rem",
    borderRadius: "5px",
    border: "1px solid #c8e6c9",
  },
};

export default App;
