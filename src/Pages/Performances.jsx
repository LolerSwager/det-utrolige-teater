import styled from "styled-components"
import EventCard from "../Components/EventCard"
import EventBanner from "../Components/EventBanner"
import { useGetList } from "../Hooks/useGetList"
/* import { useState } from "react" */

export default function Performances() {
    const { state: eventList } = useGetList("events", "items")

    //todo crasing server
    /*  const onChange = (e) => {
        const value = e.target.value

         switch (value) {
            case "ascending":
                setSorting((a, b) => a.label.localeCompare(b.label))
                break
            case "descending":
                setSorting((a, b) => b.label.localeCompare(a.label))
                break
            case "heigest":
                setSorting((a, b) => b.price - a.price)
                break
            case "lowest":
                setSorting((a, b) => a.price - b.price)
                break
        } 
    } */

    return (
        <main>
            {eventList.slice(1, 2).map((items) => (
                <EventBanner key={items.id} data={items} />
            ))}
            <StyledDiv>
                <select /* onChange={onChange} */>
                    {/* <option value="popular">Sorter efter popularitet</option> */}
                    <option value="lowest">Sorter efter pris (faldende)</option>
                    <option value="heigest">Sorter efter pris (stigende)</option>
                    <option value="ascending">Sorter efter title (A - Å)</option>
                    <option value="descending">Sorter efter title (Å - A)</option>
                </select>
                <h1>Oversigt</h1>
            </StyledDiv>
            <PerformanceWrapper>
                {eventList.map((items) => (
                    <EventCard key={items.id} data={items} frameType="list" />
                ))}
            </PerformanceWrapper>
        </main>
    )
}
const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const PerformanceWrapper = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 0;
`
