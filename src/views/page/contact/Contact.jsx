import "./contact.css"

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
        <div className="contact-container">
            <div className="contact-content">
                <div>
                    <h3 className="contact-titulo">Contact Us</h3>
                </div>
                <div className="form-container">
                    <div className="form-content">
                        <div>
                            <input type="text" className="input-default" placeholder="Nombre" onChange={(e) => setNombre(e.target.value) }></input>
                        </div>
                        <div>
                            <input type="email" className="input-default" placeholder="Email" onChange={(e) => setEmail(e.target.value) }></input>
                        </div>
                        <div>
                            <input type="text" className="input-mensaje" placeholder="Mensaje" onChange={(e) => setMensaje(e.target.value) }></input> 
                        </div>
                        <button onClick={sendEmail}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;