import React from "react";
import { Card } from "./Card";
import { mapStateToProps } from "./Card";
import { shallow } from "enzyme";

describe("Card", () => {
  let wrapper;
  const mockProps = {
    place: {
      id: 0,
      realName: "Chattanooga",
      ficName: "Chattavegas",
      reason: "I know. It is so dumb"
    },
    weather: [
      {
        latitude: 40.7128,
        longitude: -74.006,
        timezone: "America/New_York",
        currently: {
          time: 1555470242,
          summary: "Overcast",
          apparentTemperature: 56.61,
          
        },
        daily: {summary: 'It is raining sideways'}
      }
    ]
  };
  beforeEach(() => {
    wrapper = shallow(<Card {...mockProps} />);
  });

  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot with all data passed in", () => {
    const mockProps = {weather: []};
    wrapper = shallow(<Card {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe("mapStateToProps", () => {
    it("should mapStateToProps", () => {
      const mockState = {
        locations: ["Chattanooga", "Memphis"]
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(mockState);
    });
  });
});
