import React, { useState, useEffect } from "react";

const TypingAnimation = ({ textToType }) => {
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    setWords(textToType.split(" "));
  }, [textToType]);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex < words.length - 1 ? prevIndex + 1 : prevIndex));
    }, 50); // Adjust the typing speed (milliseconds per word)

    return () => clearInterval(typingInterval);
  }, [words]);

  return <div className="text-start text-gray-300 whitespace-pre-wrap">{words.slice(0, currentWordIndex + 1).join(" ")}</div>;
};

export default TypingAnimation;
