import React from 'react'
import { connect } from "react-redux";

export const Card = (place) => {
  console.log(this.props.weather)
  return (
    <div className='PlaceCard'>
      <h3>{place.place.ficName}</h3>
      <h4>{place.place.lat}</h4>
      <h4>{place.place.long}</h4>
      <h4>{place.place.id}</h4>
    </div>
  )
}

export const mapStateToProps = state => ({
  locations: state.locations,
  weather: state.weather
});

export default connect(
  mapStateToProps,
  null
)(Card);