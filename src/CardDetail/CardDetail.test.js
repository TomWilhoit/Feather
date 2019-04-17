import React from "react";
import { shallow } from "enzyme";
import { CardDetail } from "./CardDetail";
import { mapStateToProps } from "./CardDetail";

describe("CardDetail", () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      locations: [
        {
          realName: "Chattanooga",
          ficName: "Chattavegas",
          reason: "I know. It is so dumb"
        },
        {
          realName: "Nashville",
          ficName: "Nashvegas",
          reason: "I know. It is so dumb"
        }
      ],
      singleCard: 1
    };
    wrapper = shallow(<CardDetail {...mockProps} />);
  });

  it("should match the snapshot with all data passed in correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("mapStateToProps", () => {
  it("should return an object with the locations array", () => {
    const mockState = {
      locations: ["Chattanooga", "Nashville"]
    };
    const expected = {
      locations: ["Chattanooga", "Nashville"]
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
