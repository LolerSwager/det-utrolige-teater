import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Artists from "../Pages/Actors"
import MySite from "../Pages/MySite"
import Performance from "../Pages/Performances"
import Modal from "../Components/Modal/Modal"
export default function AppRouter() {
    return (
        <>
            <Modal />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/artists" element={<Artists />} />
                <Route path="/performance" element={<Performance />} />
                <Route path="/mysite" element={<MySite />} />
            </Routes>
        </>
    )
}
