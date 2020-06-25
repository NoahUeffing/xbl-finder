import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { App } from "../App";

describe("App", () => {
  it("renders without crashing given the required props", () => {
    const props = {
      loading: false,
      dispatch: jest.fn(),
      alert: null,
      users: [],
    };
    const wrapper = shallow(<App {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

it("renders the Alert when the loading prop is false", () => {
  const props = {
    loading: false,
    dispatch: jest.fn(),
    alert: null,
    users: [],
  };
  const wrapper = shallow(<App {...props} />);
  expect(wrapper.find("Alert").length).toBe(1);
});

it("renders the Navbar when the loading prop is false", () => {
  const props = {
    loading: false,
    dispatch: jest.fn(),
    alert: null,
    users: [],
  };
  const wrapper = shallow(<App {...props} />);
  expect(wrapper.find("Navbar").length).toBe(1);
});

it("renders the Switch when the loading prop is false", () => {
  const props = {
    loading: false,
    dispatch: jest.fn(),
    alert: null,
    users: [],
  };
  const wrapper = shallow(<App {...props} />);
  expect(wrapper.find("Switch").length).toBe(1);
});

it("sets the users prop as the `value` prop on the Users component", () => {
  const props = {
    loading: false,
    dispatch: jest.fn(),
    alert: null,
    users: [],
  };
  const wrapper = shallow(<App {...props} />);
  const instance = wrapper.instance();
  instance.componentDidMount();
  expect(wrapper.state("users")).toEqual(props.users);
});

it("sets the myInfo prop as the `value` prop on the MyInfo component", () => {
  const props = {
    loading: false,
    dispatch: jest.fn(),
    myInfo: [],
  };
  const wrapper = shallow(<App {...props} />);
  const instance = wrapper.instance();
  instance.componentDidMount();
  expect(wrapper.state("myInfo")).toEqual(props.myInfo);
});

it("sets the Apps alert as the `value` prop on the App component", () => {
  const props = {
    loading: false,
    dispatch: jest.fn(),
    alert: null,
    users: [],
  };
  const wrapper = shallow(<App {...props} />);
  expect(wrapper.state("alert")).toEqual(props.alert);
});

it("sets the newProfile prop as the `value` prop on the MyInfo component", () => {
  const props = {
    loading: false,
    dispatch: jest.fn(),
    newProfile: [],
  };
  const wrapper = shallow(<App {...props} />);
  const instance = wrapper.instance();
  instance.componentDidMount();
  expect(wrapper.state("newProfile")).toEqual(props.newProfile);
});
