import React from 'react';

const VehicleCard = (vehicle = {
  vehicle: {
    media: [{ name: '', url: '' }],
    price: '',
    description: ''
  }
}) => {
  const {
    media,
    price,
    description
  } = vehicle.vehicle;

  const { name = '', url = '' } = media[0];

  return (
    <div className="vehicleCard">
      <img src={url} alt={description} />
      <div className="vehicleInfo">
        <h2>{name}</h2>
        <p className="price">From £{price}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  )
};

export default VehicleCard;

