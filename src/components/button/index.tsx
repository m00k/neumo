import { FunctionComponent, h } from "preact";
import { useState } from "preact/hooks";
import * as style from "./button.css";

export interface ButtonProps {
    label: string;
}

const Button: FunctionComponent<ButtonProps> = ({ label }: ButtonProps) => {
    const [down, setDown] = useState<boolean>(false);
    const handleMouseDown = (): void => setDown(prev => !prev);
    const handleMouseUp = (): void => setDown(prev => !prev);

    return (
        <button
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            class={`${style.btn}`}
        >
            {down ? <div class={style.btnInner}>{label}</div> : label}
        </button>
    );
};

export default Button;
