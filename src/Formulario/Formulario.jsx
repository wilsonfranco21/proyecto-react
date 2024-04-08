import { useState } from "react"
import { useNavigate } from "react-router-dom"

import basedatos from "../util/basedatos.json"
import Swal from 'sweetalert2'

//importar la bd

export function Formulario(){

    let enrutador=useNavigate() //activo el enrutador

    const[verUsuario,guardarUsuario]=useState("")
    const[verContraseña,guardarContraseña]=useState("")


    //declarar una funcion qu enos permita definir la logica del formulario
    function procesarFormulario(evento){
        evento.preventDefault()

        console.log(verUsuario,verContraseña)

        let busqueda=basedatos.find(function(usuario){
        
            return(usuario.nombreIngreso==verUsuario && usuario.contraseñaIngreso==verContraseña)
        })

        

            
            if (busqueda==undefined){
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
            }else{
                 // voy a enrutar otro compomente(¿como lanzo un componente
                // desde otro componemte?)
                enrutador("/home",{state:{envio:busqueda}})
    
            }
        
        

    }

    return (
        <>
        
            <section className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-6">
                        <img src="../../src/assets/imagenes/logo sura.png" alt="logo sura" className="img-fluid" />

                    <form className="border rounded p-4" onSubmit={procesarFormulario}>
                           
                            <div class="input-group mb-3 mt-5">
                                <span class="input-group-text" id="basic-addon1">
                                    <i class="bi bi-person-vcard"></i>
                                </span>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Numero cedula"
                                    id="nombreIngreso"
                                    onChange={function(evento){guardarUsuario(evento.target.value)}}
                                />
                            </div>

                            
                            <div class="input-group mb-3 mt-5">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-vcard"></i></span>
                                <input 
                                    type="password" 
                                    class="form-control" 
                                    placeholder="contraseña"
                                    id="contraseñaIngreso"
                                    onChange={function(evento){guardarContraseña(evento.target.value)}}
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
