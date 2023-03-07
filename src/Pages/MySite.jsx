import { useLoginStore } from "../Hooks/useLoginStore"
import { useNavigate } from "react-router-dom"

export default function MySite() {
    const { loggedIn, setLogOut } = useLoginStore()
    const navigate = useNavigate()
    return (
        <main>
            {loggedIn ? (
                <>
                    <h1>velkommen til din side</h1>
                    <button onClick={() => setLogOut()}>logout</button>
                </>
            ) : (
                navigate("/")
            )}
        </main>
    )
}