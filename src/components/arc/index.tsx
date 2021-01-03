import { FunctionComponent, h } from "preact";
import { useMemo } from "preact/hooks";

interface ArcProps extends React.SVGProps<SVGPathElement> {
    fStart: number;
    fEnd: number;
    r?: number;
    cx?: number;
    cy?: number;
}

interface D {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    largeArcFlag: 0 | 1;
}

const calcPoint = (r = 1, cx = 0, cy = 0, percent: number): [number, number] => {
    return [
        cx + Math.sin(2 * Math.PI * percent) * r,
        cy - Math.cos(2 * Math.PI * percent) * r
    ];
};

const useArc: (...args: any) => D = (
    fStart: number,
    fEnd: number,
    r = 1,
    cx = 0,
    cy = 0
) => {
    return useMemo(() => {
        const calcPointR = calcPoint.bind(null, r, cx, cy);
        const [startX, startY] = calcPointR(fStart);
        const [endX, endY] = calcPointR(fEnd);
        const largeArcFlag = Math.round(fEnd - fStart) as 0 | 1;
        return {
            startX,
            startY,
            endX,
            endY,
            largeArcFlag
        };
    }, [fStart, fEnd, r, cx, cy]);
};

const Arc: FunctionComponent<ArcProps> = (props: ArcProps) => {
    const {
        fStart: from,
        fEnd: to,
        r = 1,
        cx = 0,
        cy = 0,
        fill = "currentColor"
    } = props;
    const { startX, startY, endX, endY, largeArcFlag } = useArc(
        from,
        to,
        r,
        cx,
        cy
    );
    const d =
        `M ${startX} ${startY} ` +
        `A ${r} ${r} 0 ${largeArcFlag} 1 ${endX} ${endY} ` +
        `L ${cx} ${cy}`;
    return <path fill={fill} d={d} />;
};

export default Arc;
