import { h } from "preact";
import * as style from "./style.css";


const Card = ({ children, className }: any): JSX.Element => {
    return <div class={`${style.card} ${className}`}>{children}</div>;
};

export default Card;
