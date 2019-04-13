import React from "react";
import { connect } from "react-redux";
import  Card  from '../Card/Card';
import './CardContainer.scss'

export const CardContainer = (props) => {
  const displayLocations = props.locations.map((location, index) => (
    <Card index={index} place={location} />
  ));
  return <div key={Date.now()} className="card-cont">{displayLocations}</div>;
};

export const mapStateToProps = state => ({
  locations: state.locations,
  weather: state.weather
});

export default connect(
  mapStateToProps,
  null
)(CardContainer);
