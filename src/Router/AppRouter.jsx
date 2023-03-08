import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Actors from "../Pages/Actors"
import MySite from "../Pages/MySite"
import Performance from "../Pages/Performances"
import Modal from "../Components/Modal/Modal"
import ActorsDetail from "../Pages/ActorDetail"
import EventDetail from "../Pages/EventDetail"
export default function AppRouter() {
    return (
        <>
            <Modal />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/actors" element={<Actors />} />
                <Route path="/actor/:id" element={<ActorsDetail />} />
                <Route path="/performance" element={<Performance />} />
                <Route path="/event/:id" element={<EventDetail />} />
                <Route path="/mysite" element={<MySite />} />
            </Routes>
        </>
    )
}
