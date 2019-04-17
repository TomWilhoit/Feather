import React from 'react'
import './Card.scss'
import PropTypes from "prop-types"
import { connect } from "react-redux";

export const Card = (props) => {
  if(props.weather.length){
    const temperature = props.weather[props.place.id].currently.apparentTemperature
    const summary = props.weather[props.place.id].daily.summary
  return (
    <a onClick={props.toggleDisplay}  value={props.place.id} className='place-card'>
      <h2>{props.place.ficName}</h2>
      <h1>{temperature} F</h1>
      <h4>{summary}</h4>
      <h5>Inspiration: {props.place.realName}</h5>
    </a>
  )
  }else{
    return(<div>Loading</div>)
  }
}

Card.propTypes = {
  locations: PropTypes.array,
  weather: PropTypes.array
};

export const mapStateToProps = state => ({
  locations: state.locations,
  weather: state.weather
});

export default connect(
  mapStateToProps,
  null
)(Card);