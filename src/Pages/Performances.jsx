import styled from "styled-components"
import EventCard from "../Components/EventCard"
import { useGetList } from "../Hooks/useGetList"

export default function Performances() {
    const { state: event } = useGetList("events", "items")
    return (
        <main>
            {event.slice(0, 1).map((items) => (
                <EventCard key={items.id} data={items} />
            ))}

            <PerformanceWrapper>
                {event.slice(1, 6).map((items) => (
                    <EventCard key={items.id} data={items} />
                ))}
            </PerformanceWrapper>
        </main>
    )
}

const PerformanceWrapper = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 0;
`
