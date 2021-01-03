import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const Countdown: FunctionalComponent = () => {
    return (
        <div class={style.countdown}>
            <div class={style.bar}></div>
        </div>
    );
};

export default Countdown;
