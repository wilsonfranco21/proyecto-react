import {Routes, Route} from "react-router-dom"

import { Formulario } from "../Formulario/Formulario"
import { Home } from "../Home/Home"

export function Rutas(){

    return(
        <>
            <Routes>
                <Route path="/" element={<Formulario></Formulario>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
            </Routes>
        </>
    )

}