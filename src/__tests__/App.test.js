import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { App } from "../App";
import Users from "../components/users/Users";
import Search from "../components/users/Search";

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

it("renders the Search when the loading prop is false", () => {
  const props = {
    loading: false,
    dispatch: jest.fn(),
    alert: null,
    users: [],
  };
  const wrapper = shallow(<App {...props} />);
  expect(wrapper.find("Search").length).toBe(1);
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

it("renders the Users when the loading prop is false", () => {
  const props = {
    loading: false,
    dispatch: jest.fn(),
    alert: null,
    users: [],
  };
  const wrapper = shallow(<App {...props} />);
  expect(wrapper.find("Users").length).toBe(1);
});

it("sets the users prop as the `value` prop on the Users component", () => {
  const props = {
    loading: false,
    dispatch: jest.fn(),
    alert: null,
    users: [],
  };
  const wrapper = shallow(<App {...props} />);
  // Query for the Users component in the rendered output
  const UsersComponent = wrapper.find(Users);
  expect(UsersComponent.props().users).toEqual(props.users);
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
