/** container for all routes */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

/** top-level elements for routes */

import DogList from "./DogList.jsx"
import DogNavBar from "./DogNavBar.jsx"
import DogCard from "./DogCard.jsx"

import dogs from "./data.js"


const Router = () => {
    return <BrowserRouter>
    <DogNavBar dogs={dogs} />
        <Routes>
            <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
            <Route path="/dogs/:name" element={<DogCard dogs={dogs} />} />
            <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
    </BrowserRouter>
}

export default Router