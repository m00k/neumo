import { FunctionalComponent, h } from "preact";
import Button from "../../components/button";
import * as cardStyle from "../../components/card/style.css";
import Countdown from "../../components/countdown";
import FfwdIcon from "../../components/icons/ffwd";
import NextIcon from "../../components/icons/next";
import PlayIcon from "../../components/icons/play";
import PrevIcon from "../../components/icons/prev";
import RewIcon from "../../components/icons/rew";
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
                <div class={`${style.btnRdSmall}`}>
                    <Button>
                        <RewIcon width="60%" height="60%" />
                    </Button>
                </div>
                <div class={`${style.btnRd}`}>
                    <Button>
                        <PrevIcon width="60%" height="60%" />
                    </Button>
                </div>
                <div class={`${style.btnRdLarge}`}>
                    <Button>
                        <PlayIcon width="60%" height="60%" />
                    </Button>
                </div>
                <div class={`${style.btnRd}`}>
                    <Button>
                        <NextIcon width="60%" height="60%" />
                    </Button>
                </div>
                <div class={`${style.btnRdSmall}`}>
                    <Button>
                        <FfwdIcon width="60%" height="60%" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Home;
