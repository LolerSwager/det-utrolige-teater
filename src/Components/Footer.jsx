import styled from "styled-components"

export default function Footer() {
    return (
        <StyledFooter>
            <div>
                <h4>Adresse</h4>
                <ul>
                    <li>Det utrolige teater</li>
                    <li>Havnegade 901</li>
                    <li>9000 Aalborg</li>
                    <li>EAN 5798003279845</li>
                    <li>CVR 1001 0012</li>
                    <br />
                    <li>Find vej på kort</li>
                </ul>
            </div>
            <div>
                <h4>billetservice</h4>
                <ul>
                    <li>Se åbningstider</li>
                    <li>Billettelefon: +45 96 31 80 80</li>
                    <li>billet@dut.dk</li>
                </ul>
                <h4>administration</h4>
                <ul>
                    <li>Telefon: +45 96 31 80 90</li>
                    <li>adm@dut.dk</li>
                </ul>
            </div>
            <div>
                <h4>Praktisk info</h4>
                <ul>
                    <li>Kontakt</li>
                    <li>Kom trygt i teatret</li>
                    <li>Presseside</li>
                    <li>Skoleforestillinger</li>
                    <li>Teatercaféen</li>
                    <li>Handelsbetingelser </li>
                </ul>
            </div>
            <div>
                <a href="">
                    <i className="fa-brands fa-square-facebook"></i>
                </a>
                <a href="">
                    <i class="fa-brands fa-square-instagram"></i>
                </a>
                <a href="">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: #30454c;
    color: #ffffff;
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: 1fr;
    div {
        padding: 3rem;
        h4 {
            font-size: 1.3em;
            font-weight: 700;
            text-transform: uppercase;
        }
        ul {
            padding: 1rem 0;
            li {
                list-style: none;
            }
        }
        a {
            color: #ffffff;
            i {
                padding: 0 0 0 1rem;
                font-size: 2rem;
            }
        }
    }
`
