import React from 'react'

function Menu({ icon, title, description, button, id}) {
  return (
    <div>
        <div className="container mb-4">
            <div className="d-flex" id={id}>
                <div className="icon" id='Icon'>
                    <i className={`p-4 ${icon}`}></i>
                </div>
                <div className="bg-white shadaw-sm w-100">
                    <div className=" text-menu w-100 ms-3">
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu