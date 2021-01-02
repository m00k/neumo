import { ComponentChildren, FunctionComponent, h } from "preact";
import { useState } from "preact/hooks";
import * as style from "./button.css";

export interface ButtonProps {
    children: ComponentChildren;
}

const Button: FunctionComponent<ButtonProps> = ({ children }: ButtonProps) => {
    const [down, setDown] = useState<boolean>(false);
    const handlePointerEvent = (): void => setDown(prev => !prev);

    return (
        <button
            onPointerDown={handlePointerEvent}
            onPointerUp={handlePointerEvent}
            class={`${style.btn}`}
        >
            {down ? (
                <div class={style.btnInner}>{children}</div>
            ) : (
                <>{children}</>
            )}
        </button>
    );
};

export default Button;
