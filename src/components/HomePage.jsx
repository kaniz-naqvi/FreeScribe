import React, { useEffect, useRef, useState } from "react";

const HomePage = ({ setFile, setAudio }) => {
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [audioChunks, setAudioChunks] = useState([]);
  const [duration, setDuration] = useState(0);
  const [audioStream, setAudioStream] = useState("");
  const mediaRecorder = useRef(null);
  const mimeType = "audio/webm";
  async function startRecording() {
    let tempSteam;
    console.log("Start recording");
    try {
      const steamData = navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });
      tempSteam = steamData;
    } catch (error) {
      console.log(error.message);
    }
    setRecordingStatus("recording");
    const media = new MediaRecorder(tempSteam, { type: mimeType });
    mediaRecorder.current = media;
    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (e) => {
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
  async function stopRecording() {
    setRecordingStatus("inactive");
    console.log("stop recording");
    mediaRecorder.current.stop();
    mediaRecorder.current.onStop = () => {
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      setAudio(audioBlob);
      setAudio([]);
    };
  }

  useEffect(() => {
    if (recordingStatus == "inactive") {
      return;
    }
    const interval = setInterval(() => {
      setDuration((current) => current + 1);
    }, 1000);
  }, [third]);

  return (
    <main className="flex-1 p-4 flex flex-col text-center justify-center">
      <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl">
        Free<span className="text-blue-500 bold">Scribe</span>
      </h1>
      <h3 className="text-medium md:text-lg">
        Record <span className="text-blue-500">&rarr;</span> Transcribe
        <span className="text-blue-500">&rarr;</span> Translate
        <span className="text-blue-500">&rarr;</span>
      </h3>
      <button className="flex items-center justify-between mx-auto gap-4 w-72 max-w-full my-4  p-2 rounded-lg shadow-lg hover:scale-105 duration-200">
        <p className=" text-blue-600">Record</p>
        <i className="ri-mic-fill"></i>
      </button>
      <p className="text-base">
        Or&#160;
        <label className="text-blue-500 cursor-pointer hover:text-blue-700 duration-200">
          Upload&#160;
          <input
            onChange={(e) => {
              const tempFile = e.target.files[0];
              setFile(tempFile);
            }}
            type="file"
            className="hidden"
            accept=".mp3, .wave"
          />
        </label>
        a mp3 file
      </p>
      <p className="italic text-slate-500 py-2">Free now free forever!</p>
    </main>
  );
};

export default HomePage;
