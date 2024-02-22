import '../estilos/Perfil.css';
import Contador from './Contador';
import img from '../imagenes/brais.png';

export const Perfil = (props) => {
    return (
        <>
            <div className="container">

                <div className="img-container">
                    <img
                        className="img-profile"
                        src={img}
                        alt={`Foto de ${props.nombre}`}
                    />
                </div>

                <div className="info-container">
                    <p>{props.nombre} en {props.empresa}</p>
                    <p>Pais: {props.pais}</p>
                    <p>Cargo: {props.cargo}</p>
                    <p>{props.descripcion}</p>

                    <div className='button-container'>
                        <Contador>Seguir en Linkedin </Contador>
                        <Contador>Seguir en YouTube</Contador>
                        <Contador>Seguir en Twitter</Contador>
                    </div>
                </div>



            </div>


        </>
    );
};
