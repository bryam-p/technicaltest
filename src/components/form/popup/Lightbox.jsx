import { useState } from 'react';
import { Portal } from 'react-portal'
import './lightbox.css'

const Lightbox = ({ open }) => {

    const [closePopup, setClosePopup] = useState(false)

    const handleClose = () => {
        setClosePopup(true)
    }

    return (
        open &&
        <Portal>
            <div className={`wrapper__lightbox ${closePopup && 'closePopup'}`}  >
                <div className="content__lightbox">
                    <div className="wrap__text">
                        <span>
                            “Tu información fue enviada con éxito, estaremos en contacto
                            contigo”
                        </span>
                        <button className="btn-send" onClick={handleClose} >Aceptar</button>
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default Lightbox