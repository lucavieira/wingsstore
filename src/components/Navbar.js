import React from "react";
import Menu from "../assets/styles/Menu";

const Navbar = () => {
    return (
        <nav>
            <Menu>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/quadros">Quadros</a>
                </li>
                <li>
                    <a href="#">Ecobags</a>
                </li>
                <li>
                    <a href="#">Tattoo</a>
                </li>
                <li>
                    <a href="#">Faça um pedido</a>
                </li>
                <li>
                    <a href="#">Sobre mim</a>
                </li>
                <li>
                    <a href="#">Contato</a>
                </li>
            </Menu>
        </nav>
    )
}

export default Navbar