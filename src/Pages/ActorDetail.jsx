import styled from "styled-components"
import { Link, useParams } from "react-router-dom"
import ActorDetailsCard from "../Components/ActorDetailsCard"

export default function ActorsDetail() {
    const { id } = useParams()
    return (
        <StyledMain>
            <ActorDetailsCard cardId={id} />
            <button>
                <Link to="/actors">Alle Skuespillere</Link>
            </button>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    margin: 1rem 0;
    gap: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: end;
    button {
        padding: 1rem;
        background-color: #d39d5b;
        border: none;
        width: 180px;

        a {
            color: #ffffff;
            font-weight: 700;
            text-decoration: none;
            text-transform: uppercase;
        }
    }
`
