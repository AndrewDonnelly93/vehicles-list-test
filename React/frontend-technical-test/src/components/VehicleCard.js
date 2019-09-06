import React from 'react';
import {isEmpty} from 'ramda';

const VehicleCard = (vehicle = {}) => {
  if (!isEmpty(vehicle)) {
    const {
      media = [],
      price = '',
      description = ''
    } = vehicle;

    const { name = '', url = '' } = media[0];

    return (
      <div className="vehicleCard">
        <img src={url} alt={description} />
        <div className="vehicleInfo">
          <h2>{name}</h2>
          <p className="price">From £{price}</p>
          <p className="description">From £{description}</p>
        </div>
      </div>
    )
  }
};

export default VehicleCard;

