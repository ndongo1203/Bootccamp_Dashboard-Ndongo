import React from 'react'
import Ellips from '../images/Ellipse.png'

function ContentItem() {
  return (
    <div className="container">
      <div className="mt-4 ms-4">
        <h5>Overview</h5>
            <div className="d-flex mt-4 flex">
                <div className="img">
                    <img className='img-fluid flex-img' src={Ellips} alt="" />
                </div>
                <div className="text d-md-block ms-4 mt-2">
                    <h5>Blaze | Service Main</h5>
                    <p>Created 24/22/2019</p>
                </div>
                <div className='ms-5 mt-2'>
                    <a className='text-decoration-none d-md-block' href="#rejected"><i class="bi bi-x-circle-fill text-danger fs-5"><span className='ms-3'>REJECTED</span></i></a>
                </div>
            </div>
      </div>
    </div>
  )
}

export default ContentItem
