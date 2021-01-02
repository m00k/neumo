import { FunctionalComponent, h } from "preact";

const PlayIcon: FunctionalComponent = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="100%"
            height="100%"
            style="/*! color: red; */"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path xmlns="http://www.w3.org/2000/svg" d="M8 5v14l11-7z" />
        </svg>
    );
};

export default PlayIcon;
