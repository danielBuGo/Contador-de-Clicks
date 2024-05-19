import React from "react";
import '../hojas-de-estilos/Contador.css'

function Contador ({ numclicks }) {
    return (
        <div className= 'contador'>
            {numclicks}
        </div>
    );
}

export default Contador;