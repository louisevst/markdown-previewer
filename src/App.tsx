import { useEffect, useState } from "react";
import { marked } from "marked";
function App() {
  const [text, setText] = useState("");
  useEffect(() => {
    setText(text);
  }),
    [text];
  return (
    <div className="bg-violet-300 min-h-screen">
      <h1 className="text-center text-3xl p-8 font-rubik border-b border-black">
        Markdown Previewer
      </h1>
      <main className="flex justify-between flex-col lg:flex-row w-full">
        <section className="flex flex-col lg:w-1/2 m-4">
          <h2 className="text-center text-lg p-4 font-raleway">
            Write your content here
          </h2>
          <textarea
            className="border border-black resize-none h-full min-h-[500px] rounded-lg bg-slate-50 shadow-[-4px_3px_0px_0px_rgba(0,0,0)]"
            value={text}
            placeholder=" Write your content here..."
            onChange={(e) => {
              setText(e.target.value);
              console.log(text);
            }}
          ></textarea>
        </section>
        <section className="flex flex-col lg:w-1/2 m-4">
          <h2 className="text-center text-lg p-4 font-raleway">
            Preview the content here
          </h2>
          <div
            className="prose border border-black max-w-full min-h-[500px] break-words bg-slate-200 rounded-lg shadow-[-4px_3px_0px_0px_rgba(0,0,0)]"
            dangerouslySetInnerHTML={{
              __html: marked(text),
            }}
          ></div>
        </section>
      </main>
    </div>
  );
}

export default App;
