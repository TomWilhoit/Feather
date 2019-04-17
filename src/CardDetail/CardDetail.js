import React from "react";
import "./CardDetail.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const CardDetail = props => {
  return (
    <div className="card-detail">
      <div className="details">
      <Link to="/">
        <button className="back-btn" onClick={props.returnToContainer}>
          BACK
        </button>
      </Link>
        <h2>{props.locations[props.singleCard].ficName}</h2>
        <h4>{props.locations[props.singleCard].realName}</h4>
        <h2>{props.locations[props.singleCard].reason}</h2>
      </div>
    </div>
  );
};

CardDetail.propTypes = {
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
)(CardDetail);
