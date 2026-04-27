import { useRef, useCallback } from "react";

export function useAudio() {
  const audioRef = useRef(null);

  const playAudio = useCallback((src) => {
    if (!audioRef.current) {
      const audio = new Audio(src);
      audioRef.current = audio;
    }
    audioRef.current.src = src;
    audioRef.current.play().catch((error) => {
      console.log("Audio play failed:", error);
    });
  }, []);

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, []);

  const toggleAudio = useCallback((src) => {
    if (audioRef.current && !audioRef.current.paused) {
      stopAudio();
    } else {
      playAudio(src);
    }
  }, [playAudio, stopAudio]);

  return { playAudio, stopAudio, toggleAudio, audioRef };
}
