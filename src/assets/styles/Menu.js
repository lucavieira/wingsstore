import styled from 'styled-components'

const Menu = styled.ul`
    display: flex;
    gap: 18px;

    list-style-type: none;

    a {
        text-decoration: none;
        color: black;
        transition: all 0.5s;

        &:hover{
            font-size: 18px;
            color: rgba(0,0,0,0.5);
        }
    }
`

export default Menu