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
                <pre>{Actor.description}</pre>
            </section>
        </StyledArticle>
    )
}

const StyledArticle = styled.article`
    border: 1px solid #ad7a51;
    padding: 1rem;
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;
    section {
        pre {
            white-space: pre-wrap;
        }
    }
    @media only screen and (max-width: 700px) {
        padding: 1rem;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, auto);
    }
`
