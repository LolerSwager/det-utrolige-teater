import { Link } from "react-router-dom"
import styled from "styled-components"

export default function EventCard({ data, frameType }) {
    return (
        <StyledEventCard gridDirection={frameType === "list" ? true : false} className={frameType}>
            <CardImage>
                <img src={data.image_small} alt="asd" />
            </CardImage>
            {frameType === "list" ? (
                <>
                    <CardTitle>
                        <h2>{data.title}</h2>
                        {frameType === "list" ? "" : <h3>{data.genre}</h3>}
                    </CardTitle>
                    <hr />
                    <CardStage>
                        <p>{data.stage_name}</p>
                        <h4>
                            {data.startdate} -{data.stopdate}
                        </h4>
                    </CardStage>
                </>
            ) : (
                <>
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
                </>
            )}
            <CardButtons>
                <button>
                    <Link to={`/event/${data.id}`}>LÆS MERE</Link>
                </button>
                <button>køb billet</button>
            </CardButtons>
        </StyledEventCard>
    )
}

const StyledEventCard = styled.article`
    display: grid;
    border: 1px solid #ad7a51;
    grid-template-columns: ${(props) => (props.gridDirection ? "auto 2fr auto 1fr auto" : "auto")};
    grid-template-rows: ${(props) => (props.gridDirection ? "auto" : "auto 1fr auto 2fr auto")};
    height: ${(props) => (props.gridDirection ? "100px" : "")};
    min-width: 200px;
    width: 100%;
    hr {
        margin: 1rem;
    }
    @media only screen and (max-width: 700px) {
        grid-template-columns: auto;
        grid-template-rows: auto 1fr auto 2fr auto;
        height: 100%;
        /*  h2 {
            text-align: center;
        } */
    }
`

//! - ----------------------------------------------------

const CardImage = styled.section`
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
    display: flex;
    flex-direction: column;
    justify-content: center;

    color: #d39d5b;
    padding: 1rem;
    h2 {
        font-family: "Playfair Display", serif;
        color: #d39d5b;
    }
    h3 {
        align-items: right;
        color: #707070;
        fontsize: 29px;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    color: #707070;
`

const CardButtons = styled.section`
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
