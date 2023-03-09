import styled from "styled-components"
import EventDetailsCard from "../Components/EventDetailsCard"
import { useParams } from "react-router-dom"

export default function EventDetail() {
    const { id } = useParams()
    return (
        <StyledMain>
            <EventDetailsCard cardId={id} />
        </StyledMain>
    )
}

const StyledMain = styled.main``
