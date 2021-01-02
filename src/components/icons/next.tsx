import { FunctionalComponent, h } from "preact";

export interface NextIconProps {
    width?: string;
    height?: string;
}

const NextIcon: FunctionalComponent<NextIconProps> = ({
    width,
    height
}: NextIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || "100%"}
            height={height || "100%"}
            viewBox="0 0 24 24"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
        </svg>
    );
};

export default NextIcon;
