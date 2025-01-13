import React, { useRef, useState } from "react";

const FileDisplay = ({ handleAudioReset, file, setAudio }) => {
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [audioChunks, setAudioChunks] = useState([]);
  const [duration, setDuration] = useState(0);
  const mediaRecorder = useRef(null);
  const mimeType = "audio/webm";
  async function startRecrding() {
    let tempSteam;
    console.log("Start recording");
    try {
      const steamData = nevigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });
      tempSteam = steamData;
    } catch (error) {
      console.log(error.message);
    }
    const media = new MediaRecorder(tempSteam, { type: mimeType });
    mediaRecorder.current = media;
    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavaliable = (e) => {
      if (typeof e.data === "undefined") {
        return;
      }
      if (e.dat.size === 0) {
        return;
      }
      localAudioChunks.push(e.data);
      setAudio(localAudioChunks);
    };
  }
  return (
    <main className="flex-1 p-4 flex flex-col text-center w-fit mx-auto max-w-full justify-center">
      <h1 className="font-semibold text-5xl sm:text-6xl  md:text-7xl">
        Your <span className="text-blue-500 bold">File</span>
      </h1>
      <div className="flex flex-col text-left mx-auto my-4">
        <h3 className="font-semibold">Name</h3>
        <p>{file.name}</p>
      </div>
      <div className="flex justify-between gap-11 text-left mx-auto my-4">
        <button
          onClick={handleAudioReset}
          className="text-blue-500 p-2 rounded-lg shadow-lg hover:scale-110 duration-100"
        >
          <i className="ri-reset-left-line"></i> Reset
        </button>
        <button className="text-blue-500 p-2 rounded-lg shadow-lg hover:scale-110 duration-100">
          <i className="ri-translate-ai-2"></i> Transcribe
        </button>
      </div>
    </main>
  );
};

export default FileDisplay;
