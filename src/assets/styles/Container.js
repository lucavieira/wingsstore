import styled from "styled-components";

const Container = styled.div`
    max-width: 1200px;
    width: 90%;
    height: 15vh;
    margin: auto;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    #logo {
        width: 150px;
    }

    &.categorias {
        height: 30vh;
        justify-content: space-evenly;
    }

    &.produtos {
        height: 80vh;
        justify-content: space-between;
        gap: 30px;
    }
`

export default Container