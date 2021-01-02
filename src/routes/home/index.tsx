import { FunctionalComponent, h } from "preact";
import Button from "../../components/button";
import * as btnRoundStyle from "../../components/button/round.css";
import * as cardStyle from "../../components/card/style.css";
import Countdown from "../../components/countdown";
import PlayIcon from "../../components/icons/play";
import * as style from "./style.css";

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <h1>Home</h1>
            <p>This is the Home component.</p>
            <Countdown />
            <div class={`${cardStyle.card} ${style.card}`}>
                <h1>Foo</h1>
                <div class={style.cardText}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sapiente a nam pariatur tenetur nesciunt veritatis
                    consequuntur neque architecto eum praesentium perspiciatis
                    modi saepe, distinctio dolor, illum tempora velit error?
                    Aut.
                </div>
            </div>
            <div class={style.action}>
                <div
                    class={`${style.btnRd} ${btnRoundStyle.btn} ${style.btnRdSmall}`}
                ></div>
                <div class={`${style.btnRd} ${btnRoundStyle.btn}`}></div>
                <div
                    class={`${style.btnRd} ${btnRoundStyle.btn} ${style.btnRdLarge}`}
                >
                    <div class={style.btnInner}>
                        <PlayIcon />
                    </div>
                </div>
                <div class={`${style.btnRd} ${btnRoundStyle.btn}`}></div>
                <div
                    class={`${style.btnRd} ${btnRoundStyle.btn} ${style.btnRdSmall}`}
                ></div>
            </div>
            <div class={style.centered}>
                <Button label={"foo"}></Button>
            </div>
        </div>
    );
};

export default Home;
