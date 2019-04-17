import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Card from "../Card/Card";
import PropTypes from "prop-types";
import "./CardContainer.scss";
import  CardDetail  from "../CardDetail/CardDetail";

export class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      displayDetail: false,
      currentCard: null
    }
  }

  returnToContainer = () => {
    this.setState({
      displayDetail: false
    })
  }

  toggleDisplay = (e) => {
    this.setState({
        displayDetail: true,
        currentCard: e.target.parentElement.attributes.value.value 
      })
  }

  render() {
    if(this.state.displayDetail === false){
      return (
        <div className="card-cont">
          {this.props.locations.map((location, index) => (
          <Link key={index} to={`/${location.id}`}>
        <Card  toggleDisplay={this.toggleDisplay}  key={index} index={index} place={location} />
          </Link>
      ))}
        </div>
      );
    }else{
      return(
        <div>
          
          <CardDetail returnToContainer={this.returnToContainer} singleCard={this.state.currentCard}/>
        </div>
      )
    }
  }
}

CardContainer.propTypes = {
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
)(CardContainer);
