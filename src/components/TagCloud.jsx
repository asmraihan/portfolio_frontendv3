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
        className="w-[100px] lg:w-full h-[100px] lg:h-full absolute -left-36 lg:left-0 lg:-top-28 z-40"
    >
        {[
            "SCSS",
            "Axios",
            "Tanstack",
            "Cloudinary",
            "Redux",
            "Zustand",
            "Zod",
            "Bootstrap",
            "React Native",
            "Next",
            "MongoDB",
            "Mongoose",
            "MySQL",
            "PlanetScale",
            "Prisma",
            "Sanity",
            "Firebase",
            "Git",
            "GitHub",
            "Heroku",
            "JSON",
            "ES6",
            "VS Code",
            "REST API",
            "Stripe",
        ]}
    </TagCloud>
);


export default TextCloud;