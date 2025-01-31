import { useEffect, useState } from "react";

export const useProgress = () => {
  const [progress, setProgress] = useState("0%");

  const getNewProgress = () => {
    return (
      Math.floor(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100,
      ) + "%"
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setProgress(getNewProgress());
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
};
