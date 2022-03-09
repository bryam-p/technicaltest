import React, { useContext } from 'react'
import { Context } from '../../../utils/Context'
import './menu.css'

const Menu = ({ listTravel }) => {

    const [setContext] = useContext(Context)

    return (
        <ul className="containerList">
            {
                listTravel &&
                listTravel.map(travel => (
                    <li key={travel.id} onClick={() => setContext(travel.name)} >{travel.name}</li>
                ))
            }
        </ul>
    )
}

export default Menu