import { FunctionComponent, h } from "preact";
import { useState } from "preact/hooks";
import * as style from "./button.css";

export interface ButtonProps {
    label: string;
}

const Button: FunctionComponent<ButtonProps> = ({ label }: ButtonProps) => {
    const [down, setDown] = useState<boolean>(false);
    const handlePointerEvent = (e: Event): void => {
        setDown(prev => !prev);
        e.preventDefault();
    };

    return (
        <button
            onMouseDown={handlePointerEvent}
            onTouchStart={handlePointerEvent}
            onMouseUp={handlePointerEvent}
            onTouchEnd={handlePointerEvent}
            class={`${style.btn}`}
        >
            {down ? <div class={style.btnInner}>{label}</div> : label}
        </button>
    );
};

export default Button;
