import { useEffect, useState } from "react";
import { marked } from "marked";
function App() {
  const [text, setText] = useState("");
  useEffect(() => {
    setText(text);
  }),
    [text];
  return (
    <>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          console.log(text);
        }}
      ></textarea>
      <div
        className="prose"
        dangerouslySetInnerHTML={{
          __html: marked(text),
        }}
      ></div>
    </>
  );
}

export default App;
