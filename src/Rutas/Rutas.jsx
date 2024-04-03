import {Routes, Route} from "react-router-dom"

import { Formulario } from "../Formulario/Formulario"

export function Rutas(){

    return(
        <>
            <Routes>
                <Route path="/" element={<Formulario></Formulario>}></Route>
            </Routes>
        </>
    )

}