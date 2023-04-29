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
        "Redux",
        "Bootstrap",
        "Next",
        "NodeJS",
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

      TagCloud(container, texts, options);
    };
  }, []);
    return (
        <div className="tagcloud w-[100px] lg:w-full h-[100px] lg:h-full absolute -left-36 lg:left-0 lg:-top-36"></div>    
    );
};

export default TextSphere;