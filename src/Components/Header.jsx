import { Link } from "react-router-dom"
import styled from "styled-components"
import Logo from "../assets/logo.svg"

export default function Header() {
    return (
        <StyledHeader>
            <img src={Logo} alt="logo Det Utrolige Teater" />
            <nav>
                <input type="text" placeholder="INDTAST SØGEORD" />
                <ul>
                    <li>
                        <Link to="/home">Forside</Link>
                    </li>
                    <li>
                        <Link to="/home">Forestillinger & Events</Link>
                    </li>
                    <li>
                        <Link to="/artists">Skuespillere</Link>
                    </li>
                    <li>Login</li>
                </ul>
            </nav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    text-align: right;
    margin: 0 0 1rem 0;
    align-items: flex-end;
    display: flex;
    nav {
        width: 100%;
        display: flex;
        flex-direction: column;
        ul {
            list-style: none;
            display: flex;
            gap: 1.5rem;
            li {
                text-transform: uppercase;
                color: #707070;
                &:hover {
                    color: #d39d5b;
                }
                a {
                    text-decoration: none;
                    color: #707070;
                    &:hover {
                        color: #d39d5b;
                    }
                }
            }
        }
    }
`
