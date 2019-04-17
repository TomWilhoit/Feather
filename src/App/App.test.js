import React from "react";
import ReactDOM from "react-dom";
import { mapStateToProps } from "./App";
import { mapDispatchToProps } from "./App";
import { shallow } from "enzyme";
import { App } from "./App";
import { addLocations, addWeather } from '../Actions/index'


describe("App", () => {
  let wrapper;
  let mockProps = {
    addWeather: jest.fn(),
    addLocations: jest.fn(),
    fetchBackendData: jest.fn(),
    locations: [
      { id: 0, lat: 25, long: 50 },
      { id: 1, lat: 30, long: 60 },
      { id: 2, lat: 35, long: 70 }
    ]
  };

  beforeEach(() => {
    wrapper = shallow(<App {...mockProps} />);
  });
  it("should match the snapshot with all data passed in correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should fire fetchBackEndData inside of componentDidMount', () => {
    wrapper.instance().componentDidMount()
    expect(mockProps.fetchBackendData).toHaveBeenCalled()
  })

  it.skip('should fire fetchBackendData with the right URL',  () => {
    const mockUrl = 'www.reddit.com'
    wrapper.fetchBackendData()
    expect(fetchBackEndData).toHaveBeenCalledWith(mockUrl)
  })

  it.skip('should fire fetchWeather with the right URL',  () => {
    const mockUrl = 'www.reddit.com'
    wrapper.fetchWeatherData()
    expect(fetchWeatherData.toHaveBeenCalledWith(mockUrl))
  })
  


  describe("mapStateToProps", () => {
    it("should mapStateToProps", () => {
      const mockState = {
        locations: ["Chattanooga", "Memphis"],
        weather: ["sunny", "rainy"]
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(mockState);
    });
  });
  describe("mapDispatchToProps", () => {
    it("should map dispatch to props", () => {
      const mockLocations = ["Chattanooga", "Memphis"]
      const mockDispatch = jest.fn();
      const actionToDispatch = addLocations(mockLocations);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addLocations(mockLocations);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it("should map dispatch to props", () => {
      const mockWeather = ["sunny", "rainy"]
      const mockDispatch = jest.fn();
      const actionToDispatch = addWeather(mockWeather);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addWeather(mockWeather);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
