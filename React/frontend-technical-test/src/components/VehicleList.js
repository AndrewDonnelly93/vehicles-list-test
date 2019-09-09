import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isNilOrEmpty } from 'ramda-extension';
import VehicleCard from './VehicleCard';
import { fetchVehiclesStart } from '../redux/vehicles/vehiclesActions';

class VehicleList extends Component {
  componentDidMount() {
    const { vehicles: {vehicles}, fetchVehiclesStart } = this.props;

    if (isNilOrEmpty(vehicles)) {
      fetchVehiclesStart();
    }
  }

  render() {
    const { vehicles: {vehicles, error} } = this.props;

    if (!isNilOrEmpty(vehicles)) {
      console.log(vehicles);
      return (
        <section className="vehicles">
          <h2>Vehicles</h2>
          {
            (vehicles || []).map((vehicle) => <VehicleCard key={vehicle.id} vehicle={vehicle}/>)
          };
        </section>
      )
    }

    return (<h1>Loading...</h1>);
  }
}

const mapStateToProps = (state) => ({
  vehicles: state.vehicles
});

const mapDispatchToProps = (dispatch) => ({
  fetchVehiclesStart: () => dispatch(fetchVehiclesStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleList);