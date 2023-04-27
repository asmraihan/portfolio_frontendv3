import React, { useEffect } from 'react';
import TagCloud from "TagCloud";
const TextSphere = () => {

     // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Bootstrap",
        "Next",
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
        "VSCode",
        "GITHUB",
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);
    return (
        <span className="tagcloud w-full h-full absolute -top-36"></span>    
    );
};

export default TextSphere;