import { Link } from "react-router-dom"
import styled from "styled-components"

export default function EventCard({ data, frameType }) {
    return (
        <StyledEventCard gridDirection={frameType === "list" ? true : false} className={frameType}>
            <CardImage>
                <img src={data.image_small} alt="asd" />
            </CardImage>
            <CardStage>
                <p>{data.stage_name}</p>
                <h4>
                    {data.startdate} -{data.stopdate}
                </h4>
            </CardStage>
            <hr />
            <CardTitle>
                <h2>{data.title}</h2>
                {frameType === "list" ? "" : <h3>{data.genre}</h3>}
            </CardTitle>
            {frameType === "banner" ? (
                ""
            ) : (
                <CardButtons>
                    <button>
                        <Link to={`/event/${data.id}`}>LÆS MERE</Link>
                    </button>
                    <button>køb billet</button>
                </CardButtons>
            )}
        </StyledEventCard>
    )
}

const StyledEventCard3 = styled.article`
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    grid-template-rows: auto;
    border: 1px solid #ad7a51;
    min-width: 350px
    width: 100%;
    font-s
`

const StyledEventCard = styled.article`
    display: grid;
    border: 1px solid #ad7a51;
    grid-template-columns: ${(props) => (props.gridDirection ? "auto 1fr auto 2fr 1fr" : "auto")};
    grid-template-rows: ${(props) => (props.gridDirection ? "auto" : "auto 1fr auto 2fr 1fr")};
    height: ${(props) => (props.gridDirection ? "100px" : "")};
    min-width: 200px;
    width: 100%;
    hr {
        /* grid-area: hr; */
        margin: 1rem;
    }
`

//! - ----------------------------------------------------

const CardImage = styled.section`
    /* grid-area: img; */
    height: inherit;
    width: inherit;
    aspect-ratio: 1/1;
    margin: 0 -4px 0 0;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border: 0.4em solid #ad7a51;
        margin: 0 0 -5px 0;
    }
`

const CardTitle = styled.section`
    /*  grid-area: title; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #d39d5b;
    padding: 1rem;
    h2 {
        font-family: "Playfair Display", serif;
        color: #d39d5b;
    }
    @media only screen and (max-width: 1100px) {
        h2 {
            font-size: 2em;
        }
    }
    @media only screen and (max-width: 700px) {
        h2 {
            font-size: 1.5em;
        }
    }
`

const CardStage = styled.section`
    /*  grid-area: stage; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #707070;
`

const CardButtons = styled.section`
    /*  grid-area: buttons; */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    button {
        padding: 1rem;
        gap: 1rem;
        background-color: #30454c;
        color: #ffffff;
        border: none;
        font-weight: 700;
        &: last-child {
            background-color: #d39d5b;
        }
        a {
            color: #ffffff;
            font-weight: 700;
            text-decoration: none;
            text-transform: uppercase;
        }
    }
`
