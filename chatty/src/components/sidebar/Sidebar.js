import React from 'react'
import "../sidebar/Sidebar.scss";
import { sideBarItems, fontAwesomeIcons } from "../../services/utils/static.data"
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const Sidebar = () => {
    const [sidebar, setSideBar] = useState([]);
    const location = useLocation();
    const checkurl = (name) => {
        return location.pathname.includes(name.toLowerCase());
    }
    useEffect(() => {
        setSideBar(sideBarItems);
    }, [])
    return (
        <div className="app-side-menu">
            <div className='side-menu'>
                <ul className='list-unstyled'>
                    {sidebar.map((data) => (
                        <li key={data.index}>
                            <div data-testid="sidebar-list" className={`sidebar-link ${checkurl(data.name) ?'active' : ''}`}>
                                <div className='menu-icon'>{fontAwesomeIcons[data.iconName]}</div>
                                <div className='menu-link'>
                                    <span>{`${data.name}`}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
