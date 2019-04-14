import React from 'react'
import './Card.scss'
import { connect } from "react-redux";

export const Card = (props) => {
  if(props.weather.length){
    const temperature = props.weather[props.place.id].currently.apparentTemperature
    const summary = props.weather[props.place.id].daily.summary
    console.log(props.weather[props.place.id])
    console.log(props.index)
    console.log(props.place.id)
  
  return (
    <div className='place-card'>
      <h2>{props.place.ficName}</h2>
      <h1>{temperature} F</h1>
      <h4>{summary}</h4>
      <h5>Inspiration: {props.place.realName}</h5>
    </div>
  )
  }else{
    return(<div>Loading</div>)
  }
}

export const mapStateToProps = state => ({
  locations: state.locations,
  weather: state.weather
});

export default connect(
  mapStateToProps,
  null
)(Card);