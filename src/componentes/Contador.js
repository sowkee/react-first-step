import React, {useState} from 'react';
import '../estilos/Contador.css'

export default function Contador(props) {
    const [numero, setNumero] = useState(0);

    const aumentar = () => {setNumero(numero + 1)};
    return (
        <div className='button-container'>
            <button className='button' onClick={aumentar}>{numero} {props.children}</button>
        </div>
    )
}