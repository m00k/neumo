import { FunctionalComponent, h } from "preact";
import Countdown from "../../components/countdown";
import * as style from "./style.css";
import * as cardStyle from "../../components/card/style.css";


const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <h1>Home</h1>
            <p>This is the Home component.</p>
            <Countdown />
            <div class={`${cardStyle.card} ${style.card}`}>
                Foo
            </div>
        </div>
    );
};

export default Home;
