import React from "react";
import Container from "../../assets/styles/Container";
import Categorias from "../../assets/styles/Categorias";
import Produtos from "../../assets/styles/Produtos";
import teste from "../../assets/images/frida_kahlo.jpg"
import doja from "../../assets/images/doja_cat.jpg"
import casal from "../../assets/images/casal.jpg"
import tela from "../../assets/images/tela.png"
import ecobag from "../../assets/images/ecobag.png"
import tattoo from "../../assets/images/tattoo.png"

const Home = () => {
    return (
        <>
            <Container className="categorias">
                <Categorias>
                    <img src={tela} />
                    {/* <strong>Telas</strong> */}
                </Categorias>
                <Categorias>
                    <img src={ecobag} />
                    {/* <strong>Ecobags</strong> */}
                </Categorias>
                <Categorias>
                    <img src={tattoo} />
                    {/* <strong>Tattoos</strong> */}
                </Categorias>
            </Container>
            <Container className="produtos">
                <Produtos>
                    <img src={teste} alt="" />
                    <strong className="titulo">Titulo</strong>
                    <p className="descricao">Descrição</p>
                    <strong className="preco">R$ 00,00</strong>
                </Produtos>
                <Produtos>
                    <img src={doja} alt="" />
                    <strong className="titulo">Titulo</strong>
                    <p className="descricao">Descrição</p>
                    <strong className="preco">R$ 00,00</strong>
                </Produtos>
                <Produtos>
                    <img src={casal} alt="" />
                    <strong className="titulo">Titulo</strong>
                    <p className="descricao">Descrição</p>
                    <strong className="preco">R$ 00,00</strong>
                </Produtos>
            </Container>
        </>
    )
}

export default Home