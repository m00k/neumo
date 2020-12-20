import { FunctionalComponent, h } from "preact";
import Countdown from "../../components/countdown";
import * as style from "./style.css";

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <h1>Home</h1>
            <p>This is the Home component.</p>
            <Countdown />
        </div>
    );
};

export default Home;
