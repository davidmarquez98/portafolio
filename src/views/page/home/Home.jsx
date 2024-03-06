import './home.css';

function Home(){
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="texto-container">
                    <div className="texto-content">
                        <h1 className='texto__titulo'>Hola, Soy David.</h1>
                        <h3 className='texto__subtitulo'>Desarrollador Full Stack.</h3>
                        <p className='texto__descripcion'>
                            Me apasiona la programacion y conocer el mundo!
                        </p>
                    </div>
                </div>
                <div className=''>
                    <div>
                        <p>DESCRIPCION</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;