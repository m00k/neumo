import { FunctionalComponent, h } from "preact";

export interface FfwdIconProps {
    width?: string;
    height?: string;
}

const FfwdIcon: FunctionalComponent<FfwdIconProps> = ({
    width,
    height
}: FfwdIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            // eslint-disable-next-line react/no-unknown-property
            enable-background="new 0 0 24 24"
            viewBox="0 0 24 24"
            width={width || "100%"}
            height={height || "100%"}
        >
            <g>
                <rect fill="none" height="100%" width="100%"></rect>
                <g id="g72">
                    <rect fill="none" height="24" width="24" id="rect70"></rect>
                </g>
                <g id="g84">
                    <g id="g82">
                        <path
                            d="M 11.99,5 V 1 l 5,5 -5,5 V 7 c -3.31,0 -6,2.69 -6,6 0,3.31 2.69,6 6,6 3.31,0 6,-2.69 6,-6 h 2 c 0,4.42 -3.58,8 -8,8 -4.42,0 -8,-3.58 -8,-8 0,-4.42 3.58,-8 8,-8 z"
                            id="path74"
                        ></path>
                        <g id="g80">
                            <path
                                d="M10.89,16h-0.85v-3.26l-1.01,0.31v-0.69l1.77-0.63h0.09V16z"
                                id="path76"
                            ></path>
                            <path
                                d="M15.17,14.24c0,0.32-0.03,0.6-0.1,0.82s-0.17,0.42-0.29,0.57s-0.28,0.26-0.45,0.33s-0.37,0.1-0.59,0.1 s-0.41-0.03-0.59-0.1s-0.33-0.18-0.46-0.33s-0.23-0.34-0.3-0.57s-0.11-0.5-0.11-0.82V13.5c0-0.32,0.03-0.6,0.1-0.82 s0.17-0.42,0.29-0.57s0.28-0.26,0.45-0.33s0.37-0.1,0.59-0.1s0.41,0.03,0.59,0.1c0.18,0.07,0.33,0.18,0.46,0.33 s0.23,0.34,0.3,0.57s0.11,0.5,0.11,0.82V14.24z M14.32,13.38c0-0.19-0.01-0.35-0.04-0.48s-0.07-0.23-0.12-0.31 s-0.11-0.14-0.19-0.17s-0.16-0.05-0.25-0.05s-0.18,0.02-0.25,0.05s-0.14,0.09-0.19,0.17s-0.09,0.18-0.12,0.31 s-0.04,0.29-0.04,0.48v0.97c0,0.19,0.01,0.35,0.04,0.48s0.07,0.24,0.12,0.32s0.11,0.14,0.19,0.17s0.16,0.05,0.25,0.05 s0.18-0.02,0.25-0.05s0.14-0.09,0.19-0.17s0.09-0.19,0.11-0.32s0.04-0.29,0.04-0.48V13.38z"
                                id="path78"
                            ></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default FfwdIcon;
