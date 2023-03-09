import styled from "styled-components"
import { useGetListId } from "../Hooks/useGetListId"
import { useGetList } from "../Hooks/useGetList"
import { useNavigate } from "react-router-dom"
import { useLoginStore } from "../Hooks/useLoginStore"
import Login from "./Login"
import { useForm } from "react-hook-form"
import AppService from "../Appservices/Appservice"

export default function EventDetailsCard({ cardId }) {
    const { state: event } = useGetListId("events", cardId, "item")
    const { state: reviews } = useGetList(`reviews?event_id=${event.id}`, "items")
    const navigate = useNavigate()
    const { loggedIn, userinfo } = useLoginStore()
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    const onSubmit = (submitData) => {
        try {
            AppService.post("reviews", {
                subject: submitData.title,
                comment: submitData.textarea,
                event_id: event.id,
                num_stars: 1,
            })
            alert(`subject: ${submitData.title} \n comment: ${submitData.textarea}`)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <StyledArticle>
            <CoverImage src={event.image_large} alt={"billed af forstillingen. " + event.title} />
            <section>
                <CardHeader>
                    <div>
                        <h5>{event.stage_name}</h5>
                        <p>
                            {event.startdate} - {event.stopdate}
                        </p>
                    </div>
                    <h3>BILLETPRIS: {event.price} DKK</h3>
                </CardHeader>
                <h1>{event.title}</h1>
                <h3>{event.genre}</h3>
                <pre>{event.description}</pre>
                <hr />
                <ActorWrapper>
                    {event.actors?.map((item) => {
                        return (
                            <section key={item.id} onClick={() => navigate("/actor/" + item.id)}>
                                <img src={item.image} alt={"billed af " + item.name} />
                                <h4>{item.name}</h4>
                            </section>
                        )
                    })}
                </ActorWrapper>
            </section>
            <h3>Andmeldelser</h3>
            <StyledReviews>
                {reviews?.map((item) => {
                    return (
                        <div key={item.id}>
                            <hr />
                            <p>{item.num_stars}</p>
                            <p>{item.created}</p>
                            <h4>{item.subject}</h4>
                            <pre>{item.comment}</pre>
                        </div>
                    )
                })}
            </StyledReviews>
            {!loggedIn ? (
                <ReviewsSection>
                    <h4>Skriv en anmeldelse</h4>
                    <h4>Du skal være logget ind for at skrive en anmeldelse</h4>
                    <Login />
                </ReviewsSection>
            ) : (
                <ReviewsSection>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>Fortæld om din oplevelse</h2>
                        <div>
                            {errors.title?.type === "required" && (
                                <p className="alert" role="alert">
                                    {errors.title?.message}
                                </p>
                            )}
                            <input
                                {...register("title", {
                                    required: "title er påkrævet",
                                })}
                                type="text"
                                placeholder="title"
                            />
                            {errors.textarea?.type === "required" && (
                                <p className="alert" role="alert">
                                    {errors.textarea?.message}
                                </p>
                            )}
                            <textarea
                                {...register("textarea", { required: "du mangler at skrive en besked" })}
                                placeholder="skriv en besked"
                                rows="6"
                            />
                        </div>
                        <button>send</button>
                    </form>
                </ReviewsSection>
            )}
        </StyledArticle>
    )
}

const StyledArticle = styled.article`
    border: 1px solid #ad7a51;
    h3 {
        padding: 1rem 0;
    }
    section {
        padding: 1rem;
        h1 {
            padding: 1rem 0;
        }
        pre {
            white-space: pre-wrap;
            padding: 1rem 0;
            font-size: 26px;
            color: #d39d5b;
        }
        hr {
            border: 1px dashed #ad7a51;
            margin: 1rem 0;
        }
    }
`
const CoverImage = styled.img`
    max-width: 100%;
    border: 1rem solid #ad7a51;
    aspect-ratio: 2/1;
    object-fit: cover;
`

const CardHeader = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    div {
        flex-direction: column;
    }
`

const ActorWrapper = styled.article`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, auto));
    gap: 1rem;
    padding: 1rem;
    cursor: pointer;
    section {
        border: 1px solid #ad7a51;
        img {
            width: 100%;
        }
        h4 {
            text-align: center;
            color: #d39d5b;
            font-size: 2em;
            font-weight: 300;
        }
    }
`

const StyledReviews = styled.section`
    padding: 1rem;
    div {
        hr {
            border: 1px solid #dfdfdf;
            margin: 1rem 0;
        }
    }
`

const ReviewsSection = styled.section`
    background-color: #ad7a51;
    min-height: 200px;
    color: #ffffff;
    h4 {
        padding: 0 2rem;
        font-size: 26px;
        font-weight: 300;
    }
    form {
        grid-template-columns: auto;
        width: clamp(200px, 100%, 500px);
        gap: 0.5rem;
        div {
            display: grid;
            gap: 0.5rem;
            input,
            textarea {
                padding: 0.5rem;
            }
        }
    }
    button {
        padding: 0.6rem;
        margin: 0.5rem 1px;
        color: #ffffff;
        border: none;
        background-color: #30454c;
        text-transform: uppercase;
        transition: ease-in-out 0.2s;
        cursor: pointer;
        &:hover {
            background-color: #61e692;
        }
    }
`
