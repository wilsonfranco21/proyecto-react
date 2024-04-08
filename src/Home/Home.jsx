import basedatos from "../util/basedatos.json"

import {useLocation} from "react-router-dom"

export function Home() {
    
    let location=useLocation() //activa
    let datos=location.state.envio
    console.log(datos)

    return (
        <>

<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../assets/imagenes/logo baner.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
      Bootstrap
    </a>
  </div>
</nav>

            <div className="container m-5">
                <div className="row">
                    <div className="col-6 col-md-6">
                        <h3 className="fuente">Módulo Asignación de Empresas</h3>
                        <h2 className="text-muted">Bienvenido <span className="fuente">{datos?.nombreUsuario}</span></h2>
                        <p>A continuación encontrarás información sobre las empresas asignadas a cada Consultor, esto te permitirá gestionar el proyecto de gestión de riesgo y visualizar los consultores asignados a cada empresa.</p>
                    </div>

                    <div className="col-6 col-md-6 text-center card">
                        <h5>Cargo: <span className="fuente">{datos?.cargo}</span></h5>
                        <h5>Profesión: <span className="fuente">{datos?.profesion}</span></h5>
                        <h5>Ruta: <span className="fuente">{datos?.ruta}</span></h5>
                    </div>
                </div>
            </div>

            <section className="container my-5">
                <div className="row row-cols-1 row-cols-md-3 g-2">
                    {datos?.empresas?.map(function(empresa, index) {
                        return (
                            <div className="col m-2" key={index}>
                                <div className="card h-100 shadow mt-3 text-center pt-3">
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