import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Artists from "../Pages/Actors"

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists />} />
        </Routes>
    )
}
