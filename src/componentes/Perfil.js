import React, { useState } from 'react';
import '../estilos/Perfil.css';

function Perfil(props){

    return(
        <div className='contenedor-perfil'>
            <img className='imagen-perfil'
            src={require(`../imagenes/perfil-${props.imagen}.png`)}
            alt='Foto de desarrollador' />
        <div className='contenedor-texto-perfil'>
            <p className='nombre-perfil'>
               <strong>{props.nombre}</strong> en {props.pais}
            </p>        
        <p className='cargo-perfil'>
            {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-perfil'>"{props.perfil}" </p>
        </div>
        
        <button className='button'  onClick={() => window.open(props.linkedin, '_blank')}>Seguir en Linkedin</button>        
        <button className='button' onClick={() => window.open(props.youtube, '_blank')}>Seguir en YouTube</button>
        <button className='button' onClick={() => window.open(props.twitter, '_blank')}>Seguir en Twitter</button>


    </div>
    );
}
export default Perfil;