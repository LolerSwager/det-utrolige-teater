import styled from "styled-components"

export const ModalStyled = styled.div`
    display: ${(props) => props.showmodal};
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: #00000015;
    main {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        border: 3px solid black;
        margin: auto;
        max-width: 330px;
        z-index: 3;
    }

    .close {
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: grid;
        place-items: center;
        position: absolute;
        right: 10px;
        top: 10px;
        background-color: #fff;
        color: #333;
        &:hover {
            background-color: #ccc;
            cursor: pointer;
        }
    }
`
