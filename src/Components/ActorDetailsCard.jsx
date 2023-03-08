import styled from "styled-components"
import { useGetListId } from "../Hooks/useGetListId"

export default function ActorDetailsCard({ cardId }) {
    const { state: Actor } = useGetListId("actors", cardId, "item")
    return (
        <StyledArticle>
            <section>
                <h1>Skuespillere</h1>
                <img src={Actor.image} alt={Actor.name} />
            </section>
            <section>
                <h2>{Actor.name}</h2>
                <p>{Actor.description}</p>
            </section>
        </StyledArticle>
    )
}

const StyledArticle = styled.article`
    border: 1px solid #ad7a51;
    padding: 1rem;
    display: felx;
    gap: 1rem;
    section {
        h1 {
            color: #d39d5b;
        }
        p {
            width: 700px;
        }
    }
`
