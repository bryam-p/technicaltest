import React, { memo, useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { useFormErrors } from '../../hooks/useFormErrors'
import { config } from './configForm'
import './form.css'
import Lightbox from './popup/Lightbox'

const Form = memo(function Form({ context }) {

    const initialState = {
        fullName: '',
        email: '',
        cel: '',
        age: ''
    }

    const [formValues, handleInputChange, reset] = useForm({ initialState })
    const [resetData, setResetData] = useState({})
    const [sendOk, setSendOk] = useState(false)
    const [praparedData, setPreparedData] = useState(false)
    const [popup, setPopup] = useState(false)
    const { fullName, email, cel, age } = formValues

    const [handleError, handleMenssage] = useFormErrors()

    const menssageErrors = handleMenssage()

    useEffect(() => {
        if (sendOk) {
            handleError(config(fullName, email, cel, age))
            setSendOk(false)
            setPreparedData(true)
        }
    }, [age, cel, email, fullName, sendOk])


    const handleSubmit = (e) => {
        e.preventDefault()
        setSendOk(true)
        setResetData(e)
    }

    useEffect(() => {
        if (praparedData && Object.entries(menssageErrors).length === 0) {
            console.log(`Datos enviados \nNombre: ${fullName} \nEmail: ${email} \nCelular: ${cel} \nEdad: ${age} \nAvión: ${context}`)
            setPreparedData(false)
            setPopup(true)
            reset()
            resetData.target.reset()
        }
    }, [praparedData, menssageErrors])

    useEffect(() => {
        const timer = setTimeout(() => {
            setPopup(false)
        }, 5000);
        return () => clearTimeout(timer);
    }, [popup])

    return (

        context !== '' ?
            <form onSubmit={handleSubmit} className="formData" noValidate>
                <div className="wrapper__input">
                    <label htmlFor="fullName">Nombre completo</label>
                    <input type="text" name="fullName" id="fullName" placeholder="Ejemplo: Joe Dae" onChange={handleInputChange} autoComplete="off" />
                    <small className={menssageErrors?.fullName ? 'errorsActive' : 'errors__input'}>{menssageErrors?.fullName}</small>
                </div>

                <div className="wrapper__input">
                    <label htmlFor="age">Email</label>
                    <input type="email" name="email" placeholder="Ejemplo: joedae@gmail.com" id="email" onChange={handleInputChange} autoComplete="off" />
                    <small className={menssageErrors?.email ? 'errorsActive' : 'errors__input'}>{menssageErrors?.email}</small>
                </div>

                <div className="wrapper__input">
                    <label htmlFor="cel">Celular</label>
                    <input type="text" name="cel" placeholder="Ejemplo: 3163203774" id="cel" onChange={handleInputChange} autoComplete="off" />
                    <small className={menssageErrors?.cel ? 'errorsActive' : 'errors__input'}>{menssageErrors?.cel}</small>
                </div>

                <div className="wrapper__input wrapper__age">
                    <label htmlFor="age">Edad</label>
                    <div className="container__age">
                        <input type="range" name="age" id="age" min="18" max="100" step="1" onChange={handleInputChange} autoComplete="off" />
                        <small>{age ? age : 0} Años</small>
                    </div>
                </div>
                <small className={menssageErrors?.age ? 'errorsActive' : 'errors__input'}>{menssageErrors?.age}</small>

                <button type="submit" className="btn-submit">Enviar</button>

                <Lightbox open={popup} />
            </form> : null

    )
})

export default Form