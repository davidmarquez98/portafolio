import "./contact.css"

function Contact(){
    return (
        <div className="contact-container">
            <div className="contact-content">
                <div>
                    <h3 className="contact-titulo">Contact Us</h3>
                </div>
                <div className="form-container">
                    <div className="form-content">
                        <div>
                            {/* <label>Nombre</label> */}
                            <input type="text" className="input-default" placeholder="Nombre"></input>
                        </div>
                        <div>
                            {/* <label>Email</label> */}
                            <input type="email" className="input-default" placeholder="Email"></input>
                        </div>
                        <div>
                            {/* <label>Mensaje</label> */}
                            <input type="text" className="input-mensaje" placeholder="Mensaje"></input> 
                        </div>
                        <button>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;