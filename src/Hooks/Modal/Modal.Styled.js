import styled from "styled-components";

export const ModalStyled = styled.div`
    display: ${(props) => props.showmodal};
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100vW;
    height: 100VH;
    overflow: auto;
    background-color: #00000015;
    main{
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        padding: 40px;
        border: 3px solid black;
        margin: auto;
        width: 80vW;
        color:red;
    }

    .close{
        border-radius: 50%;
        position: absolute;
        right: 10px;
        top: 10px;
        background-color: #fff;
        color: #333;
        &:hover{
            background-color: #ccc;
            cursor: pointer;
            
        }
    }
`