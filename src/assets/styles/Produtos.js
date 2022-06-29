import styled from "styled-components";

const Produtos = styled.div`
    width: 300px;
    height: 412px;

    background-color: azure;

    border: 1px solid #00000050;

    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: end;
    padding: 10px;

    .titulo {
        font-size: 24px;
    }

    .descricao {
        color: gray;
    }

    .preco {
        font-size: 20px;
    }
`

export default Produtos