import styled from "styled-components"

export default function EventCard({ data }) {
    return (
        <StyledEventCard>
            <section className="image">
                <img src={data.image_small} alt="asd" />
            </section>
            <section className="title">
                <h2>{data.title}</h2>
                <h3>{data.genre}</h3>
            </section>
            <section className="stage">
                <p>{data.stage_name}</p>
                <h4>
                    {data.startdate} -{data.stopdate}
                </h4>
            </section>
            <section className="buttons">
                <button>Læs Mere</button>
                <button>køb billet</button>
            </section>
        </StyledEventCard>
    )
}

const StyledEventCard3 = styled.article`
    display: grid;
    grid-template-columns: auto 1fr 2fr 1fr;
    grid-template-rows: auto;
    border: 1px solid #ad7a51;
    /*  height: 100px; */
    width: 100%;
    .image {
        height: inherit;
        width: inherit;
        aspect-ratio: 1/1;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #d39d5b;
        padding: 1rem;
    }
    .stage {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #707070;
    }
    .buttons {
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
    }
`

const StyledEventCard2 = styled.article`
    display: grid;
    grid-template-rows: auto 1fr 2fr 1fr;
    grid-template-columns: auto;
    border: 1px solid #ad7a51;
    /* height: 100px; */
    width: 300px;
    .image {
        height: inherit;
        width: inherit;
        aspect-ratio: 1/1;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #d39d5b;
        padding: 1rem;
    }
    .stage {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #707070;
    }
    .buttons {
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
    }
`

const StyledEventCard = styled.article`
    display: grid;
    grid-template-columns: auto 1fr 2fr 1fr;
    grid-template-rows: auto;
    border: 1px solid #ad7a51;
    height: 100px;
    .image {
        height: inherit;
        aspect-ratio: 1/1;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border: 0.4em solid #ad7a51;
        }
    }
    .title {
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: #d39d5b;
        padding: 1rem;
    }
    .stage {
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: #707070;
    }
    .buttons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
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
    }
`
