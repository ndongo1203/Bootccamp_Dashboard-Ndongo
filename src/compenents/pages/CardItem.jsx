import React from 'react';

function CardItem({ header, text, title, image, desciption, footer }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card border ">
        <div className="card-header bg-transparent border">
          {header}
          <h5>{title}</h5>
          <p>{text}</p>
        </div>
        <div className="card-body w-100">
          <img className="w-100" src={image} alt="" />
          <p className="card-text p-1">{desciption}</p>
        </div>
        <div className="card-footer bg-transparent border text-end">{footer}</div>
      </div>
    </div>
  )
}

export default CardItem;
