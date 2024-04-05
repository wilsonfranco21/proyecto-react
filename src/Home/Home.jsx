import basedatos from "../util/basedatos.json"

export function Home(){

    return (
        <>
            <section className="container mt-5">
            <div className="row">
                    <div className="col-6 col-md-6">
                        <h3 className="fuente">Servicios a un clic</h3>
                        <h2 className="text-muted">HOLA <span className="fuente">{basedatos[0].nombreUsuario}</span></h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque delectus nesciunt tenetur error nostrum enim quam corrupti praesentium, facere quasi mollitia accusamus, modi rem reprehenderit ad incidunt excepturi tempore, quia neque officia doloribus. Facilis excepturi qui minus consectetur illum numquam, magni soluta, dolor ducimus culpa veritatis vel dignissimos, consequuntur aliquam?</p>
                    </div>

                    <div className="col-6 col-md-6">
                        <h5>Cargo: <span className="fuente">{basedatos[0].cargo}</span></h5>
                        <h5>Profesión: <span className="fuente">{basedatos[0].profesion}</span></h5>
                        <h5>Ruta: <span className="fuente">{basedatos[0].ruta}</span></h5>

                    </div>

                    </div>
            </section>
            <section className="container my-5">
                <div className="row row-cols-1 row-cols-md-3 g-2">
                    {
                        basedatos[0].empresas.map(function(empresa){
                            return(
                                <div className="col m-2">
                                    <div className="card h-100 shadow mt-3 text-center pt-3">
                                        <h4>{empresa}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </section>
        
        
        
        
        </>

    )

}