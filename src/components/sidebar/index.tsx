import { NavLink } from 'react-router-dom'
import './sidebar.scss'
import { useState } from 'react'
import { Locations } from '../../constants/locations'

const Sidebar = () => {

    const [currentPath, setCurrentPath] = useState(Locations.DASHBOARD)
    console.log('sidebar rendered')

    return (
        <div className='side-container col'>
            <div className='col mt-4 '>
                <ul className="nav nav-pills nav flex-column text-light nav">
                    <NavLink to={Locations.DASHBOARD}>
                        <li onClick={() => setCurrentPath(Locations.DASHBOARD)} className="nav-item">
                            <a data-toggle="tab" className={`nav-link text-light ${Locations.DASHBOARD == currentPath ? 'active' : ''}`}>Dashboard</a>
                        </li>
                    </NavLink>
                    <NavLink to={Locations.HOME}>
                        <li onClick={() => setCurrentPath(Locations.HOME)} className="nav-item">
                            <a data-toggle="tab" className={`nav-link text-light ${Locations.HOME == currentPath ? 'active' : ''}`}>Home</a>
                        </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar