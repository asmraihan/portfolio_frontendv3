import { TagCloud } from "@frank-mayer/react-tag-cloud";

const TextCloud = () => (
    <TagCloud
        options={(w) => ({
            radius: 300,
            maxSpeed: "normal",
            initSpeed: "normal",
            keep: true,
        })}
        // onClick={(tag, ev) => alert(tag)}
        onClickOptions={{ passive: true }}
        className="w-[100px] lg:w-full h-[100px] lg:h-full absolute -left-36 lg:left-0 lg:-top-36 z-40"
    >
        {[
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
        ]}
    </TagCloud>
);


export default TextCloud;