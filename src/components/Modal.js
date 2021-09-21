import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const Modal = ({ videoId }) => {
  const [video, setVideo] = useState("");

  useEffect(() => {
    setVideo(`https://www.youtube.com/watch?v=${videoId}`);
  }, [videoId]);

  return (
    <div>
      <ReactPlayer url={video} />
    </div>
  );
};

export default Modal;
