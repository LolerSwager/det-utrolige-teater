import { Link } from "react-router-dom"
import styled from "styled-components"
import Logo from "../assets/logo.svg"
import { useLoginStore } from "../Hooks/useLoginStore"
import { useModalStore } from "./Modal/useModalStore"
import Login from "./Login"
import { useState } from "react"

export default function Header() {
    const { loggedIn } = useLoginStore()
    const { setModalPayload } = useModalStore()
    const [burgerMenu, setBurgerMenu] = useState(false)
    return (
        <StyledHeader>
            <nav>
                <div>
                    <img src={Logo} alt="logo Det Utrolige Teater" />
                    <i
                        className={burgerMenu === false ? "fa-solid fa-bars" : "fa-solid fa-x"}
                        onClick={() => setBurgerMenu(!burgerMenu)}
                    ></i>
                </div>

                <StyledSection burgerMenuShow={burgerMenu}>
                    <input type="text" placeholder="INDTAST SØGEORD" />

                    <ul onClick={() => setBurgerMenu(!burgerMenu)}>
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
                    </ul>
                </StyledSection>
            </nav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    margin: 0 0 1rem 0;
    i {
        cursor: pointer;
    }
    @media only screen and (min-width: 900px) {
        nav {
            display: flex;
            justify-content: space-between;
            div {
                padding: 1rem;
                i {
                    display: none;
                }
            }
            div {
                i {
                    display: none;
                }
            }
            section {
                display: flex;
                flex-direction: column;
                margin: 1rem;
                max-width: 100%;
                input {
                    display: flex;
                    max-width: 200px;
                    align-self: self-end;
                }
                ul {
                    display: flex;
                    li {
                        list-style: none;
                        padding: 0.5rem;
                        text-align: center;
                        a {
                            padding: 0.5rem;
                            color: #000000;
                            text-decoration: none;
                            font-size: 1.3em;
                            &:hover {
                                color: #d39d5b;
                            }
                        }
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 900px) {
        nav {
            div {
                padding: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                i {
                    font-size: 2em;
                    transition: ease-in-out 1s;
                }
            }
            section {
                flex-direction: column;
                margin: 1rem;
                input {
                    margin: auto;
                    min-width: 250px;
                }

                ul {
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    li {
                        list-style: none;
                        padding: 0.5rem;
                        text-align: center;
                        a {
                            padding: 0.5rem;
                            color: #000000;
                            text-decoration: none;
                            font-size: 1.5em;
                            &:hover {
                                color: #d39d5b;
                            }
                        }
                    }
                }
            }
        }
    }
`

const StyledSection = styled.section`
    display: ${(props) => (props.burgerMenuShow ? "flex" : "none")};
`
