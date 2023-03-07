import styled from "styled-components"
import EventCard from "../Components/EventCard"
import { useGetList } from "../Hooks/useGetList"

export default function Home() {
    const { state: event } = useGetList("events", "items")
    return (
        <main>
            {event.slice(0, 1).map((items) => (
                <EventCard key={items.id} data={items} frameType="banner" />
            ))}

            <EventWrapper>
                {event.slice(1, 4).map((items) => (
                    <EventCard key={items.id} data={items} frameType="standing" />
                ))}
            </EventWrapper>
        </main>
    )
}

const EventWrapper = styled.article`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin: 1rem 0;
`
