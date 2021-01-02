import { FunctionalComponent, h } from "preact";

export interface PrevIconProps {
    width?: string;
    height?: string;
}

const PrevIcon: FunctionalComponent<PrevIconProps> = ({
    width,
    height
}: PrevIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || "100%"}
            height={height || "100%"}
            viewBox="0 0 24 24"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
        </svg>
    );
};

export default PrevIcon;
