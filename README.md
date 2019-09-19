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
