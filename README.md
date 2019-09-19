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
