import styled from "styled-components"

export default function EventCard({ data, frameType }) {
    return (
        <StyledEventCard gridDirection={frameType === "list" ? true : false}>
            <CardImage>
                <img src={data.image_small} alt="asd" />
            </CardImage>
            <CardTitle>
                <h2>{data.title}</h2>
                {frameType === "list" ? "" : <h3>{data.genre}</h3>}
            </CardTitle>
            <CardStage>
                <p>{data.stage_name}</p>
                <h4>
                    {data.startdate} -{data.stopdate}
                </h4>
            </CardStage>
            {frameType === "banner" ? (
                ""
            ) : (
                <CardButtons>
                    <button>Læs Mere</button>
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
    /*  height: 100px; */
    min-width: 350px
    width: 100%;
    font-s
`

const StyledEventCard = styled.article`
    display: grid;
    grid-template-columns: ${(props) => (props.gridDirection ? "auto 1fr 2fr 1fr" : "auto")};
    grid-template-rows: ${(props) => (props.gridDirection ? "auto" : "auto 1fr 2fr 1fr")};
    border: 1px solid #ad7a51;
    height: ${(props) => (props.gridDirection ? "100px" : "")};
    min-width: 250px;
    width: 100%;
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
    align-items: center;
    color: #d39d5b;
    padding: 1rem;
`

const CardStage = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    }
`
