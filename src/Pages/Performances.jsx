import styled from "styled-components"
import EventCard from "../Components/EventCard"
import EventBanner from "../Components/EventBanner"
import { useGetList } from "../Hooks/useGetList"

export default function Performances() {
    const { state: event } = useGetList("events", "items")
    return (
        <main>
            {event.slice(1, 2).map((items) => (
                <EventBanner key={items.id} data={items} />
            ))}
            <h1>Oversigt</h1>
            <select name="" id="">
                <option value="">Sorter efter popularitet</option>
                <option value="">Sorter efter pris (faldende)</option>
                <option value="">Sorter efter pris (stigende)</option>
                <option value="">Sorter efter title (A - Å)</option>
                <option value="">Sorter efter title (Å - A)</option>
            </select>
            <PerformanceWrapper>
                {event.slice(1, 6).map((items) => (
                    <EventCard key={items.id} data={items} frameType="list" />
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
