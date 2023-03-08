import styled from "styled-components"
import { useGetListId } from "../Hooks/useGetListId"

export default function EventDetailsCard({ cardId }) {
    const { state: event } = useGetListId("events", cardId, "item")
    return (
        <StyledArticle>
            <section>
                <img src={event.image_large} alt="" />
                <div>
                    <div>
                        <h5>{event.stage_name}</h5>
                        <p>{event.startdate - event.stopdate}</p>
                    </div>
                    <h3>BILLETPRIS: {event.price} DKK</h3>
                </div>
                <h1>{event.title}</h1>
                <h3>{event.genre}</h3>
                <pre>{event.description}</pre>

                <article>
                    {event.actors?.map((item) => {
                        return (
                            <section key={item.id}>
                                <img src={item.image} alt={"billed af " + item.name} />
                                <h4>{item.name}</h4>
                            </section>
                        )
                    })}
                </article>
                <hr />
            </section>
        </StyledArticle>
    )
}

const StyledArticle = styled.article`
    border: 1px solid #ad7a51;
    padding: 1rem;
`
