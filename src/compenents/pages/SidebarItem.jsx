import React from 'react'

function SidebarItem({ icon, text, id }) {
    return (
        <ul className='p-1 ms-2 d-flex list-unstyled '>
            <li className={`sidebar-icon ${icon}`}></li>
            <li className="sidebar-text  ms-3">{text}</li>
        </ul>
    )
}

export default SidebarItem