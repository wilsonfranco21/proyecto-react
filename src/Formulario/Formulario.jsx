export function Formulario(){

    return (
        <>
        
            <section className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-6">
                        <img src="../../src/assets/imagenes/logo sura.png" alt="logo sura" className="img-fluid" />

                    <form className="border rounded p-4">
                           
                            <div class="input-group mb-3 mt-5">
                                <span class="input-group-text" id="basic-addon1">
                                    <i class="bi bi-person-vcard"></i>
                                </span>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Numero cedula"
                                    id="identificacion"
                                    onChange={function(evento){guardarCedula(evento.target.value)}}
                                />
                            </div>

                            
                            <div class="input-group mb-3 mt-5">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-vcard"></i></span>
                                <input 
                                    type="password" 
                                    class="form-control" 
                                    placeholder="contraseña"
                                    id="contraseña"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">Ingresar</button>

                    </form>





                    </div>


                </div>






            </section>


        </>
    )




}
