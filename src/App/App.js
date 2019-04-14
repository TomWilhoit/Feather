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
  constructor () {
    super()
  }
  componentDidMount( ){
    this.fetchBackendData();
  }

  fetchBackendData = async () => {
    const url = "http://localhost:3000/api/v1/locations"
    const response = await fetchData(url)
    await this.props.addLocations(response)
    this.fetchWeatherData()
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
      return (
        <div className="App">
          <Header/>
          <CardContainer/>
        </div>
      );
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
