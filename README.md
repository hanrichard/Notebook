https://medium.com/@rossbulat/test-driven-development-in-react-with-jest-and-enzyme-2a6cf2cc3071


https://dev.to/theactualgivens/testing-react-hook-state-changes-2oga

text include

    expect(shallowWrapper.text().includes("42612")).toBe(true);


  it('on input', () => {
    const { shallowWrapper } = setup();
    shallowWrapper.find('#standard-full-width').simulate('change', {target: {value: 23}})
    expect(shallowWrapper.find("#standard-full-width").props().value).toEqual(23);
  });


  it("should render correct ", () => {
    const { shallowWrapper, mountWrapper } = setup();
    mountWrapper.find('button').simulate('submit');
    expect(mountWrapper.text().includes("")).toBe(true);
  });



import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Note from "./Note";

configure({ adapter: new Adapter() });

function setup() {
  const props = {};

  const shallowWrapper = shallow(<Note {...props} data-test="test"/>);
  const mountWrapper = mount(<Note {...props} data-test="test" />);

  return {
    props,
    mountWrapper,
    shallowWrapper
  };
}

describe("Note item component", () => {
  it("should render", () => {
    const { shallowWrapper } = setup();
    expect(shallowWrapper.find("div")).toHaveLength(1);
  });


  it('on input', () => {
    const { shallowWrapper } = setup();
    shallowWrapper.find('#standard-full-width').simulate('change', {target: {value: 23}})
    expect(shallowWrapper.find("#standard-full-width").props().value).toEqual(23);
  });

  it('on submit', () => {
    const mockEvent = { preventDefault: jest.fn() };
    const { shallowWrapper } = setup();
    shallowWrapper.find('#standard-full-width').simulate('change', {target: {value: 23}})
    shallowWrapper.find('#button').simulate('click', mockEvent);
    // console.log(shallowWrapper.debug());w
    expect(shallowWrapper.exists("[data-test-submit]")).toEqual(true);
  });
});



reports:
```import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Reports from "./Reports";
import TestRenderer from "react-test-renderer";

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    "data": {
      "data":[
        {
          "organisation":"Westbus",
          "date":"25/09/2015",
          "busData":[
            {
              "busId":"94811",
              "routeVariant":"664 2 1",
              "deviationFromTimetable":164
            },
            {
              "busId":"62788",
              "routeVariant":"UNKNOWN",
              "deviationFromTimetable":null
            },
            {
              "busId":"14221",
              "routeVariant":"834 1 1",
              "deviationFromTimetable":423
            }
          ]
        }
      ]
    }
  
  };

  const shallowWrapper = shallow(<Reports {...props} />);
  const mountWrapper = mount(<Reports {...props} data-test="test" />);

  return {
    props,
    shallowWrapper,
    mountWrapper
  };
}

describe("Reports component", () => {
  const { mountWrapper } = setup();

  it("should render", () => {
    expect(mountWrapper.exists("[data-test]")).toEqual(true);

    expect(mountWrapper.text().includes("94811")).toBe(true);
    expect(mountWrapper.text().includes("664 2 1")).toBe(true);
  });

  // it("renders component snapshot", () => {
  //   const tree = TestRenderer.create(<Reports />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});



tablebox

import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TableBox from "./TableBox";
import TestRenderer from "react-test-renderer";

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    busData: [
      {
        busId: "42612",
        routeVariant: "891 2 1",
        deviationFromTimetable: 77
      }
    ]
  };

  const mountWrapper = mount(<TableBox {...props} data-test="test" />);
  const shallowWrapper = shallow(<TableBox {...props} data-test="test" />);

  return {
    props,
    mountWrapper,
    shallowWrapper
  };
}

describe("Table item component", () => {
  const { shallowWrapper, mountWrapper } = setup();

  it("should render", () => {
    expect(mountWrapper.exists("[data-test]")).toEqual(true);
  });

  it("should render correct props", () => {
    shallowWrapper.setProps({
      busData: [
        {
          busId: "42612",
          routeVariant: "891 2 1",
          deviationFromTimetable: 77
        }
      ]
    });
    
    // expect(shallowWrapper.text()).to.equal('42612');
    expect(shallowWrapper.text().includes("42612")).toBe(true);

    expect(shallowWrapper.find(".tableCell-busId")).toHaveLength(1);
    expect(shallowWrapper.find(".tableCell-routeVariant")).toHaveLength(1);
    expect(
      shallowWrapper.find(".tableCell-deviationFromTimetable")
    ).toHaveLength(1);
  });

  // it("renders component snapshot", () => {
  //   const tree = TestRenderer.create(<TableBox />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});


reports

import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Report from "./Report";
import TestRenderer from "react-test-renderer";

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    "busData":[
      {
        "busId":"94811",
        "routeVariant":"664 2 1",
        "deviationFromTimetable":164
      }
    ]
  };

  const mountWrapper = mount(<Report {...props} data-test="test" />);
  const shallowWrapper = shallow(<Report {...props} data-test="test" />);

  return {
    props,
    mountWrapper,
    shallowWrapper
  };
}

describe("Report item component", () => {
  const { shallowWrapper, mountWrapper } = setup();

  it("should render", () => {
    expect(mountWrapper.exists("[data-test]")).toEqual(true);
  });

  it("should render correct ", () => {
    expect(mountWrapper.text().includes("94811")).toBe(true);
    expect(mountWrapper.text().includes("664 2 1")).toBe(true);
  });


  // it("renders component snapshot", () => {
  //   const tree = TestRenderer.create(<Report />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});


note:
import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Note from "./Note";

configure({ adapter: new Adapter() });

function setup() {
  const props = {};

  const shallowWrapper = shallow(<Note {...props} data-test="test"/>);
  const mountWrapper = mount(<Note {...props} data-test="test" />);

  return {
    props,
    mountWrapper,
    shallowWrapper
  };
}

describe("Note item component", () => {
  it("should render", () => {
    const { shallowWrapper } = setup();
    expect(shallowWrapper.find("div")).toHaveLength(1);
  });


  it('on input', () => {
    const { shallowWrapper } = setup();
    shallowWrapper.find('#standard-full-width').simulate('change', {target: {value: 23}})
    expect(shallowWrapper.find("#standard-full-width").props().value).toEqual(23);
  });

  it('on submit', () => {
    const mockEvent = { preventDefault: jest.fn() };
    const { shallowWrapper } = setup();
    shallowWrapper.find('#standard-full-width').simulate('change', {target: {value: 23}})
    shallowWrapper.find('#button').simulate('click', mockEvent);
    // console.log(shallowWrapper.debug());w
    expect(shallowWrapper.exists("[data-test-submit]")).toEqual(true);
  });
});

report

import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Report from "./Report";
import TestRenderer from "react-test-renderer";

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    "busData":[
      {
        "busId":"94811",
        "routeVariant":"664 2 1",
        "deviationFromTimetable":164
      }
    ]
  };

  const mountWrapper = mount(<Report {...props} data-test="test" />);
  const shallowWrapper = shallow(<Report {...props} data-test="test" />);

  return {
    props,
    mountWrapper,
    shallowWrapper
  };
}

describe("Report item component", () => {
  const { shallowWrapper, mountWrapper } = setup();

  it("should render", () => {
    expect(mountWrapper.exists("[data-test]")).toEqual(true);
  });

  it("should render correct ", () => {
    expect(mountWrapper.text().includes("94811")).toBe(true);
    expect(mountWrapper.text().includes("664 2 1")).toBe(true);
  });


  // it("renders component snapshot", () => {
  //   const tree = TestRenderer.create(<Report />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});

