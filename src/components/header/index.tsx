import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import * as style from "./style.css";
import * as btnStyle from "../button/style.css";

const Header: FunctionalComponent = () => {
    return (
        <header class={style.header}>
            <h1>Neumo</h1>
            <nav>
                <Link
                    activeClassName={btnStyle.active}
                    class={btnStyle.btn}
                    href="/"
                >
                    Home
                </Link>
                <Link
                    activeClassName={btnStyle.active}
                    class={btnStyle.btn}
                    href="/foo"
                >
                    Foo
                </Link>
            </nav>
        </header>
    );
};

export default Header;
