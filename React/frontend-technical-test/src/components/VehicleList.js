import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isNilOrEmpty } from 'ramda-extension';
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
        <h1>Hello World</h1>
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