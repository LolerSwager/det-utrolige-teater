import { Link } from "react-router-dom"
import styled from "styled-components"
import Logo from "../assets/logo.svg"
import { useLoginStore } from "../Hooks/useLoginStore"
import { useModalStore } from "./Modal/useModalStore"
import Login from "./Login"

export default function Header() {
    const { loggedIn } = useLoginStore()
    const { setModalPayload } = useModalStore()

    return (
        <StyledHeader>
            <img src={Logo} alt="logo Det Utrolige Teater" />
            <nav>
                <input type="text" placeholder="INDTAST SØGEORD" />
                <ul>
                    <li>
                        <Link to="/">Forside</Link>
                    </li>
                    <li>
                        <Link to="/performance">Forestillinger & Events</Link>
                    </li>
                    <li>
                        <Link to="/actors">Skuespillere</Link>
                    </li>
                    <li>
                        {!loggedIn ? (
                            <a onClick={() => setModalPayload(<Login />)}>Login</a>
                        ) : (
                            <Link to="/mysite">Min side</Link>
                        )}
                    </li>
                </ul>
            </nav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    margin: 0 0 1rem 0;
    nav {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        ul {
            list-style: none;
            gap: 1.5rem;
            li {
                text-transform: uppercase;
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
