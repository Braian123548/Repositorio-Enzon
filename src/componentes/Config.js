import React from 'react'

export const Config = ({admin, setAdmin}) => {

    if(admin === true){

    return (


        <>
            <button className="boton">Editar</button>
            <button className="boton">Eliminar</button>
        </>


    )
    }
}
