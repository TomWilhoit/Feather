import React from "react";
import { CardContainer } from "./CardContainer";
import { mapStateToProps } from "./CardContainer";
import { shallow } from "enzyme";

describe("CardContainer", () => {
  let wrapper;
  let mockProps = {
    locations: ["Chattanooga", "Memphis"]
  };
  beforeEach(() => {
    wrapper = shallow(<CardContainer locations={mockProps.locations} />);
  });

  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have default state", () => {
    expect(wrapper.state()).toEqual({
      currentCard: null,
      displayDetail: false
    });
  });

  it("should change the state of displayDetail when returnToContainer is invoked", () => {
    const mockEvent = {target:{ parentElement : { attributes: {value:{value: 0}}}}}
    wrapper.setState({ displayDetail: true });
    wrapper.instance().toggleDisplay(mockEvent);
    expect(wrapper.state()).toEqual({
      currentCard: 0,
      displayDetail: true
    });
  });

  it("should change the state of displayDetail when toggleDisplay is invoked", () => {
    wrapper.setState({ displayDetail: true });
    wrapper.instance().returnToContainer();
    expect(wrapper.state()).toEqual({
      currentCard: null,
      displayDetail: false
    });
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
