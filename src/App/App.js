import React, { Component } from 'react';
import { Header } from '../Header/Header';
import  CardContainer  from '../CardContainer/CardContainer'
import { connect } from 'react-redux';
import { addLocations } from '../Actions'
import { addWeather } from '../Actions'
import { APIkey } from '../Utils/APIkey'
import { fetchData } from '../Utils/API'
import './App.scss';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      locationList: [{Metropolis: [40.7128,-74.0060]},{Wakanda: [4.8594,31.5713]},{Hogwarts: [57.4216, 4.6656]}],
      backEndList: []
    }
  }
  componentDidMount( ){
    this.fetchBackendData();
  }

  fetchBackendData = async () => {
    const url = "http://localhost:3000/api/v1/locations"
    const response = await fetchData(url)
    await this.props.addLocations(response)
  }

  fetchWeatherData = async () => {
    try {
      const result = await Promise.all(this.props.locations.map( async (location) => {
        let lat = location.lat;
        let long = location.long;
        const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${APIkey}/${lat},${long}`
        return await fetchData(url)}))
        this.props.addWeather(result)
    } catch(error){
    } 
  }

  render() {
    this.fetchWeatherData()
    if(this.props.locations.length === 0){
      return(
        <div>Loading</div>
      )
    }else{
      return (
        <div className="App">
          <Header/>
          <CardContainer/>
        </div>
      );
    }
  }
}

export const mapStateToProps = state => ({
  locations: state.locations,
  weather: state.weather
});

export const mapDispatchToProps = dispatch => ({
  addLocations: locations => dispatch(addLocations(locations)),
  addWeather: weatherLocals => dispatch(addWeather(weatherLocals))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
