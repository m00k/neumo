import { FunctionalComponent, h } from "preact";
import Arc from "../arc/index";

export interface PieSliceProps {
    text: string;
    bgcolor: string;
    color: string;
    clipIf: boolean;
    fractionStart: number;
    fractionEnd: number;
}

const PieSlice: FunctionalComponent<PieSliceProps> = (props: PieSliceProps) => {
    const {
        text,
        bgcolor,
        color,
        clipIf: setClipPath,
        fractionStart,
        fractionEnd
    } = props;
    const VIEWBOX_SIZE = 100;
    const id = `clip${Math.floor(1000000 * Math.random())}`;
    return (
        <svg
            width="100%"
            height="100%"
            viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
        >
            <g clip-path={setClipPath ? `url(#${id})` : ``}>
                <circle cx="50%" cy="50%" r="50%" fill={bgcolor}></circle>
                <text
                    x="50%"
                    y="50%"
                    dominant-baseline="middle"
                    fill={color}
                    font-size={((2 / 3) * VIEWBOX_SIZE) / 2}
                    font-weight="700"
                    text-anchor="middle"
                >
                    {text}
                </text>
            </g>
            <clipPath id={id}>
                <Arc
                    cx={50}
                    cy={50}
                    r={VIEWBOX_SIZE / 2}
                    fStart={fractionStart}
                    fEnd={fractionEnd}
                />
            </clipPath>
        </svg>
    );
};

export default PieSlice;
