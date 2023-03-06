import styled from "styled-components"
import ActorCard from "../Components/ActorCard"
import { useGetList } from "../Hooks/useGetList"

export default function Actors() {
    const { state: ActorsList } = useGetList("actors", "items")
    return (
        <StyledMain>
            <h1>Skuespillere</h1>
            <div>
                {ActorsList.map((items) => (
                    <ActorCard key={items.id} data={items} />
                ))}
            </div>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    border: 1px solid #ad7a51;
    padding: 1rem;
    h1 {
        color: #d39d5b;
    }
`
