import basedatos from "../util/basedatos.json"

import {useLocation} from "react-router-dom"

export function Home() {
    
    let location=useLocation() //activa
    let datos=location.state.envio
    console.log(datos)

    return (
        <>

            <div className="bg-primary border-bottom border-3 border-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">
                    <img src="../../src/assets/logo baner.png" alt="Logo" width="175" height="75" className="img-fluid d-inline-block align-text-top my-2"/>
                    </a>
                </div>
            </div>

            <div className="container-fluid mt-5 pb-3 pt-2">
                <div className="row d-flex d-flex justify-content-center">
                    <div className="col-6 col-md-6 me-5">
                        <h3 className="fuente mb-4">Módulo Asignación de Empresas</h3>
                        <h2 className="text-muted">Bienvenido <span className="fuente">{datos?.nombreUsuario}</span></h2>
                        <p className="">A continuación encontrarás información sobre las empresas asignadas a cada Consultor, esto te permitirá gestionar el proyecto de gestión de riesgo y visualizar los consultores asignados a cada empresa.</p>
                    </div>

                    <div className="col-6 col-md-6 text-center card w-25 shadow-lg h-100 bg-primary-subtle py-4 bg-primary border border-dark border-3">
                        <h5 className="fw-bold">Cargo: <span className="fuente fw-normal">{datos?.cargo}</span></h5>
                        <h5 className="fw-bold">Profesión: <span className="fuente fw-normal">{datos?.profesion}</span></h5>
                        <h5 className="fw-bold">Ruta: <span className="fuente fw-normal">{datos?.ruta}</span></h5>
                    </div>
                </div>
            </div>

            <section className="container d-flex justify-content-evenly mb-5">
                <div className="row row-cols-12 row-cols-md-3">
                    {datos?.empresas?.map(function(empresa, index) {
                        return (
                            <div className="col m-2" key={index}>
                                <div className="card h-100 shadow mt-3 text-center pt-3 bg-primary border border-dark border-2 text-white">
                                    <h4>{empresa}</h4>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}