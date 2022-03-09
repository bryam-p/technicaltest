import { useEffect } from 'react';
import { Portal } from 'react-portal'
import './lightbox.css'

const Lightbox = ({ open, setPopup }) => {

    const handleClose = () => {
        setPopup(false)
    }

    useEffect(() => {
        if (open) {
            document.body.classList.add('block-overflow');
        } else {
            document.body.classList.remove('block-overflow');
        }
    }, [open])


    return (
        open &&
        <Portal>
            <div className='wrapper__lightbox'   >
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