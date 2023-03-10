import styled from "styled-components"
import { useLoginStore } from "../Hooks/useLoginStore"
import { useNavigate } from "react-router-dom"
import { useGetList } from "../Hooks/useGetList"
import AppService from "../Appservices/Appservice"

export default function MySite() {
    const { loggedIn, setLogOut, userinfo } = useLoginStore()
    const navigate = useNavigate()
    const { state: myreviews } = useGetList("reviews", "items")

    return (
        <StyledMain>
            {loggedIn ? (
                <>
                    <h1>Min side</h1>
                    <button onClick={() => setLogOut()}>logout</button>

                    <Styledarticle>
                        <section>
                            <h3>Title</h3>
                            <h3>Andmeldese</h3>
                            <h3>Handling</h3>
                        </section>
                        {myreviews.map((item) => {
                            if (parseInt(item.user_id) === userinfo.user_id) {
                                return (
                                    <section key={item.id}>
                                        <p>{item.subject}</p>
                                        <p>{item.comment}</p>
                                        <div>
                                            <button>Rediger</button>
                                            <button onClick={() => AppService.remove("reviews", item.id)}>slet</button>
                                        </div>
                                    </section>
                                )
                            }
                        })}
                    </Styledarticle>
                </>
            ) : (
                navigate("/")
            )}
        </StyledMain>
    )
}
const StyledMain = styled.main`
    border: 1px solid #ad7a51;
    padding: 1rem;
    button {
        padding: 0.5rem 1rem;
        border: none;
        background-color: #ad7a51;
        color: #ffffff;
    }
`

const Styledarticle = styled.div`
    section {
        padding: 0.5rem 1rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid black;
        div {
            display: flex;
            gap: 1rem;
            button {
                border: none;
                background: #ffffff;
                color: green;
                &:last-child {
                    color: red;
                }
            }
        }
    }
`
