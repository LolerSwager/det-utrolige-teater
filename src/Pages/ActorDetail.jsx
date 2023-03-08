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
    button {
        padding: 1rem;
        background-color: #d39d5b;
        border: none;
        a {
            color: #ffffff;
            font-weight: 700;
        }
    }
`
