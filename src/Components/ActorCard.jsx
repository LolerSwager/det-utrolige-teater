import styled from "styled-components"

export default function ActorCard({ data }) {
    return (
        <StyledActorCard>
            <div>
                <img src={data.image} alt="asd" />
                <div>
                    <h3>{data.name}</h3>
                    <p>{data.description}</p>
                </div>
                <button>LÆS MERE</button>
            </div>
        </StyledActorCard>
    )
}

const StyledActorCard = styled.section`
    width: 100%;
    border-bottom: 1px solid black;
    padding: 0 0 1rem 0;
    margin: 0 0 1rem 0;
    div {
        display: flex;
        flex-direction: row; //todo fix the fucking button
        padding: 1rem 0;
        gap: 1rem;
        img {
            aspect-ratio: 1/1;
            max-width: 200px;
            max-height: 200px;
        }
        div {
            display: flex;
            flex-direction: column;
            h3 {
                color: #707070;
            }
            p {
                color: #d39d5b;
            }
        }
        button {
            background-color: #30454c;
            color: #ffffff;
            border: none;
            /* height: 40px; */
            padding: 1rem;
        }
    }
`
