import { Routes, Route } from "react-router-dom"
import Home from "../Page/Home"

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}
