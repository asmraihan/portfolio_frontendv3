import React, { useLayoutEffect } from 'react';
import TagCloud from "TagCloud";

const TextSphere = () => {
  const container = ".tagcloud";
  const texts = [
    "HTML",
    "CSS",
    "SCSS",
    "Redux",
    "Bootstrap",
    "Next",
    "MongoDB",
    "Sanity",
    "React Native",
    "Firebase",
    "Git",
    "GitHub",
    "Heroku",
    "JSON",
    "ES6",
    "VSCode",
    "REST API",
  ];

  const options = {
    radius: 300,
    maxSpeed: "normal",
    initSpeed: "normal",
    keep: true,
  };
  useLayoutEffect(() => {
    return () => {
     
      TagCloud(container, texts, options);
    };
  }, [container]);
  return (
    <div className="tagcloud w-[100px] lg:w-full h-[100px] lg:h-full absolute -left-36 lg:left-0 lg:-top-36 z-40"></div>
  );
};

export default TextSphere;