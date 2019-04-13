import React, { Component } from 'react';
import { Header } from '../Header/Header'
// import { connect } from 'react-redux'
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
    // this.fetchWeatherData()
  }

  fetchBackendData = async () => {
    const url = "http://localhost:3000/api/v1/locations"
    const response = await fetchData(url)
    await this.setState({
      backEndList: response
    })
  }

  // fetchWeatherData = async () => {
  //   const lat = Object.values(this.state.locationList[0])[0][0]
  //   const long = Object.values(this.state.locationList[0])[0][1]
  //   const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${APIkey}/${lat},${long}`
  //   try {
  //     const response = await fetchData(url);
  //   } catch(error){
  //   } 
  // }

  displayBackEnd = () => {
    console.log('fired')
    // const locationCard = this.state.backEndList.forEach((location, index) => {
    //   console.log(location)
    // })
    // return locationCard
  }



  render() {
    if(this.state.backEndList.length === 0){
      return(
        <div>Loading</div>
      )
    }else{
      return (
        <div className="App">
          <Header/>
          <ul>{this.state.backEndList.map(location => {
            return  <li>{location.ficName + '-' + location.realName}</li>
          })}</ul>
        </div>
      );
    }
  }
}

export default App

// export default connect(
//   null,
//   null
// )(App);
