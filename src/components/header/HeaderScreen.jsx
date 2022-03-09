import { listTravel } from '../../data/listTravel'
import Menu from './menu/Menu'
import './header.css'

const HeaderScreen = () => {

    return (
        <header>
            <div className="top__banner"></div>
            <div className="container wrapper" >
                <Menu listTravel={listTravel} />
            </div>
        </header>
    )
}

export default HeaderScreen