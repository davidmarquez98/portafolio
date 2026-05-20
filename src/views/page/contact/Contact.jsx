import { useState } from 'react';

function Contact(){

    const [form, setForm] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((currentForm) => ({
            ...currentForm,
            [name]: value
        }));
    };

    const sendEmail = (event) => {
        event.preventDefault();

        const subject = `Portfolio - ${form.nombre || 'Contacto'}`;
        const body = `${form.mensaje}\n\nEmail: ${form.email}`;
        window.open(`mailto:davidmarquez98@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    };

    return (
        <section className="flex w-full justify-center px-[24px] py-[46px] max-[800px]:px-[20px]">
            <div className="grid w-full max-w-[980px] grid-cols-[0.8fr_1fr] gap-[48px] max-[800px]:grid-cols-1 max-[800px]:gap-[30px]">
                <div className="flex flex-col justify-center gap-[16px]">
                    <h3 className="text-[clamp(30px,4vw,42px)] leading-[1.15] text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)]">
                        Contacto
                    </h3>
                    <p className="max-w-[420px] text-[16px] leading-[1.55] text-[var(--accent-color)] dark:text-[var(--secondary-color-dark-mode)]">
                        Si querés escribirme por una propuesta, una consulta o para charlar sobre tecnología, dejame un mensaje.
                    </p>
                </div>

                <form className="flex flex-col gap-[18px] rounded-[8px] bg-[#E5DDBE] p-[24px] shadow dark:bg-[var(--primary-color-dark-mode)]" onSubmit={sendEmail}>
                    <label className="flex flex-col gap-[8px] text-[14px] font-bold text-[var(--secondary-color)] dark:text-[var(--quaternary-color-dark-mode)]">
                        Nombre
                        <input
                            type="text"
                            name="nombre"
                            value={form.nombre}
                            className="h-[42px] rounded-[5px] bg-[var(--primary-color)] px-[12px] text-[var(--secondary-color)] outline-none ring-[#D5CAC7] transition focus:ring-2 dark:bg-[var(--secondary-color-dark-mode)] dark:text-[var(--quaternary-color-dark-mode)]"
                            onChange={handleChange}
                        />
                    </label>

                    <label className="flex flex-col gap-[8px] text-[14px] font-bold text-[var(--secondary-color)] dark:text-[var(--quaternary-color-dark-mode)]">
                        Email
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            className="h-[42px] rounded-[5px] bg-[var(--primary-color)] px-[12px] text-[var(--secondary-color)] outline-none ring-[#D5CAC7] transition focus:ring-2 dark:bg-[var(--secondary-color-dark-mode)] dark:text-[var(--quaternary-color-dark-mode)]"
                            onChange={handleChange}
                        />
                    </label>

                    <label className="flex flex-col gap-[8px] text-[14px] font-bold text-[var(--secondary-color)] dark:text-[var(--quaternary-color-dark-mode)]">
                        Mensaje
                        <textarea
                            name="mensaje"
                            value={form.mensaje}
                            className="min-h-[140px] resize-none rounded-[5px] bg-[var(--primary-color)] px-[12px] py-[10px] text-[var(--secondary-color)] outline-none ring-[#D5CAC7] transition focus:ring-2 dark:bg-[var(--secondary-color-dark-mode)] dark:text-[var(--quaternary-color-dark-mode)]"
                            onChange={handleChange}
                        />
                    </label>

                    <button className="mt-[6px] h-[44px] rounded-[999px] bg-[#D5CAC7] px-[22px] font-bold text-[var(--secondary-color)] transition hover:bg-[#cbbdb9] dark:bg-[var(--secondary-color-dark-mode)] dark:text-[var(--quaternary-color-dark-mode)]" type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
