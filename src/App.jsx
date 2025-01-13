import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import FileDisplay from "./components/FileDisplay";

function App() {
  const [file, setFile] = useState(null);
  const [audio, setAudio] = useState(null);
  const isAudioAvaliable = file || audio;
  function handleAudioReset() {
    setAudio(null);
    setFile(null);
  }
  return (
    <div className="flex flex-col">
      <section className="min-h-screen flex flex-col">
        <Header />
        {isAudioAvaliable ? (
          <FileDisplay
            handleAudioReset={handleAudioReset}
            setAudio={setAudio}
            file={file}
          />
        ) : (
          <HomePage setAudio={setAudio} setFile={setFile} />
        )}
      </section>
    </div>
  );
}

export default App;
