

import { useState } from 'react';
import { Resend } from 'resend';

function Contact(){

    let [ nombre, setNombre ] = useState(null);
    let [ email, setEmail ] = useState(null);
    let [ mensaje, setMensaje ] = useState(null);

    let mail = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    }

    const sendEmail = async () => {

        
    };


    return (
        <div className="flex items-center justify-center w-[100%]">
            <div className="contact-content">
                <div>
                    <h3 className="text-[var(--secondary-color)] text-[35px]">Contact Us</h3>
                </div>
                <div className="mt-[50px]">
                    <div className="flex flex-col gap-[60px]">
                        <div>
                            <input type="text" className="h-[30px]" placeholder="Nombre" onChange={(e) => setNombre(e.target.value) }></input>
                        </div>
                        <div>
                            <input type="email" className="h-[30px]" placeholder="Email" onChange={(e) => setEmail(e.target.value) }></input>
                        </div>
                        <div>
                            <input type="text" className="h-[100px] transform-[translateY(-30px)] visibility-[hidden]" placeholder="Mensaje" onChange={(e) => setMensaje(e.target.value) }></input> 
                        </div>
                        <button onClick={sendEmail}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;