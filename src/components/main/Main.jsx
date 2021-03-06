import React, { useState } from 'react'
import { Context } from '../../utils/Context'
import Form from '../form/Form'
import HeaderScreen from '../header/HeaderScreen'
import './main.css'

const Main = () => {

    const [context, setContext] = useState("");

    return (
        <Context.Provider value={[setContext]} >
            <HeaderScreen />
            <div className="container wrapperForm">
                <div className="welcome__title">
                    <small>Por favor, selecciona una de las opciones del menú</small>
                    <div>Hola, bienvenido, sabemos que quieres <br></br>  viajar en un avión de: <strong>{context}</strong> </div>
                </div>
                <Form context={context} />
            </div>
        </Context.Provider >
    )
}

export default Main