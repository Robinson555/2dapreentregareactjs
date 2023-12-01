import { CardWidget } from "../CardWidget/CardWidget";
import "./navbar.css";

export const NavBar = () => {
    return (
        <section className="mainNav">
            <div className="mainLogo">
                <article className="mainImagen">
                    <img src="img/logo.png" alt="Logo" height={45} width={45} />
                </article>
                <article className="mainNomLog"> M&M </article>
            </div>
            <div className="barraNav">
                <article>
                    <ul>
                        <li className="itemNav">
                            <a href="#"> Moda Hombre </a>
                        </li>
                        <li className="itemNav">
                            <a href="#"> Moda Mujer </a>
                        </li>
                        <li className="itemNav">
                            <a href="#"> Moda Infantil </a>
                        </li>
                        <li className="itemNav">
                            <a href="#"> Todo Calzado </a>
                        </li>
                    </ul>
                </article>
            </div>
            <div className="navCarrito">
                <article>
                    <a href="">
                        <CardWidget />
                    </a>
                </article>
            </div>
        </section>
    );
};
