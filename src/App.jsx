import { useState } from "react"; // Importing useState hook
import "./App.css"; // Importing CSS
import HomePage from "./components/HomePage"; // Importing HomePage component
import Header from "./components/Header"; // Importing Header component
import FileDisplay from "./components/FileDisplay"; // Importing FileDisplay component

function App() {
  const [file, setFile] = useState(null); // State for file
  const [audio, setAudio] = useState(null); // State for audio
  const isAudioAvaliable = file || audio; // Check if audio or file is available

  // Reset audio and file states
  function handleAudioReset() {
    setAudio(null);
    setFile(null);
  }

  return (
    <div className="flex flex-col">
      <section className="min-h-screen flex flex-col">
        <Header /> // Header component
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

export default App; // Exporting App component
