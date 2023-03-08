import { Link } from "react-router-dom"
import styled from "styled-components"

export default function ActorCard({ data }) {
    return (
        <StyledActorCard>
            <div>
                <img src={data.image} alt="asd" />
                <div>
                    <h3>{data.name}</h3>
                    <p>{data.description}</p>
                </div>

                <button>
                    <Link to={`/actor/${data.id}`}>LÆS MERE</Link>
                </button>
            </div>
        </StyledActorCard>
    )
}

const StyledActorCard = styled.section`
    width: 100%;
    border-bottom: 1px solid black;
    padding: 0 0 1rem 0;
    margin: 0 0 1rem 0;
    div {
        display: grid;
        grid-template-columns: auto minmax(200px, 780px) auto;
        gap: 1rem;
        padding: 1rem 0;
        img {
            aspect-ratio: 1/1;
            max-width: 200px;
            max-height: 200px;
        }
        div {
            display: flex;
            flex-direction: column;
            margin: 1rem;
            h3 {
                color: #707070;
                text-transform: uppercase;
            }
            p {
                color: #d39d5b;
                overflow: hidden;
            }
        }
        button {
            padding: 1rem;
            background-color: #30454c;
            border: none;
            height: 50px;
            a {
                color: #ffffff;
                font-weight: 700;
                text-decoration: none;
                text-transform: uppercase;
            }
        }
        @media only screen and (max-width: 700px) {
            padding: 1rem;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, auto);
        }
    }
`
