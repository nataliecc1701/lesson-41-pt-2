/** container for all routes */

import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

/** top-level elements for routes */

import DogList from "./DogList.jsx"
import DogNavBar from "./DogNavBar.jsx"
import DogCard from "./DogCard.jsx"

import dogs from "./data.js"
import ColorList from "./ColorList.jsx"
import ColorForm from "./ColorForm.jsx"
import ColorCard from "./ColorCard.jsx"


const Router = () => {
    const [colors, setColors] = useState([
        {color: "#DD1111", name: "Red"},
        {color: "#cccc0a", name: "Yellow"},
        {color: "#1144ee", name: "Blue"},
    ])
    
    const addColor = (color) => {
        setColors(colors => [color, ... colors])
    }
    
    return <BrowserRouter>
    <DogNavBar dogs={dogs} />
        <Routes>
            <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
            <Route path="/dogs/:name" element={<DogCard dogs={dogs} />} />
            <Route exact path="/colors" element={<ColorList colors={colors} />} />
            <Route path="/colors/new" element={<ColorForm addColor={addColor} />}/>
            <Route path="/colors/:name" element={<ColorCard colors={colors} />} />
            <Route path="*" element={<Navigate to="/colors" />} />
        </Routes>
    </BrowserRouter>
}

export default Router