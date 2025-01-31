import { useEffect, useState } from "react";

const getNewProgress = () => {
  return (
    Math.floor(
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
        100,
    ) + "%"
  );
};

export const useProgress = () => {
  const [progress, setProgress] = useState("0%");

  useEffect(() => {
    const handleScroll = () => {
      setProgress(getNewProgress());
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
};
