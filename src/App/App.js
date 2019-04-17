import React, { Component } from 'react';
import { Header } from '../Header/Header';
import { Route, Switch } from "react-router-dom";
import  CardContainer  from '../CardContainer/CardContainer'
import { connect } from 'react-redux';
import { addLocations } from '../Actions'
import { addWeather } from '../Actions'
import { APIkey } from '../Utils/APIkey'
import { fetchData } from '../Utils/API'
import PropTypes from "prop-types"
import './App.scss';
import   CardDetail   from '../CardDetail/CardDetail';
export class App extends Component {
  
  componentDidMount( ){
    this.fetchBackendData();
  }

  fetchBackendData = async () => {
    const url = "http://localhost:3000/api/v1/locations"
    const response = await fetchData(url)
    await this.props.addLocations(response)
    this.fetchWeatherData(response)
  }

  fetchWeatherData = async (locations) => {
    try {
      const result = await Promise.all(locations.map( async (location) => {
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
          <Switch>
            <Route path="/" component={CardContainer}/>
            <Route path='/:id' render={({match}) => {
              const { id } = match.params
              const place = this.props.locations.find(location => location.id === id)
              if(place) {
                return <CardDetail  {...place} /> 
              }
            }} />
            />
          </Switch>
        </div>
      );
    }
  }

  App.propTypes = {
    locations: PropTypes.array,
    weather: PropTypes.array
  };

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
