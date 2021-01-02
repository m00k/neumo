import { FunctionalComponent, h } from "preact";

export interface PlayIconProps {
    width?: string;
    height?: string;
}

const PlayIcon: FunctionalComponent<PlayIconProps> = ({
    width,
    height
}: PlayIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={width || "100%"}
            height={height || "100%"}
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path xmlns="http://www.w3.org/2000/svg" d="M8 5v14l11-7z" />
        </svg>
    );
};

export default PlayIcon;
