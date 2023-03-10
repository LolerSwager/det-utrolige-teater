import styled from "styled-components"

export default function EventCard({ data }) {
    return (
        <StyledEventCard>
            <StyledSectionWrapper>
                <CardStage>
                    <p>{data.stage_name}</p>
                    <h4>
                        {data.startdate.split("-").reverse().join(".")} - {data.stopdate.split("-").reverse().join(".")}
                    </h4>
                </CardStage>
                <hr />
                <CardTitle>
                    <h2>{data.title}</h2>
                    <h3>{data.genre}</h3>
                </CardTitle>
            </StyledSectionWrapper>
            <CardImage>
                <img src={data.image_medium} alt="asd" />
            </CardImage>
        </StyledEventCard>
    )
}


const StyledEventCard = styled.article`
    display: grid;
    border: 1px solid #ad7a51;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    min-width: 350px;
    width: 100%;
    max-width: 1200px;
    hr {
        margin: 1rem;
    }
    @media only screen and (max-width: 900px) {
        /* grid-template-columns: auto;
        grid-template-rows: auto; */
        display: flex;
        flex-direction: column-reverse;
    }
`
const StyledSectionWrapper = styled.section`
    display: grid;
    grid-template-rows: 1fr auto auto;'
`

const CardImage = styled.section`
    height: inherit;
    width: inherit;
    aspect-ratio: 4/2;
    margin: 0 -1rem -6px 0;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border: 0.4em solid #ad7a51;
    }
`

const CardTitle = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #d39d5b;
    padding: 1rem;
    h2 {
        font-family: "Playfair Display", serif;
        color: #d39d5b;
        font-size: 4em;
        text-align: right;
    }
    h3 {
        color: #707070;
        fontsize: 29px;
    }
    @media only screen and (max-width: 1150px) {
        h2 {
            font-size: 2em;
        }
    }
`

const CardStage = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #707070;
    text-align: right;
`
