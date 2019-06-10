import React from "react";
import { mount, shallow } from "../../setup";
import Tickets from "../../../src/containers/Tickets";

import { findTestByAttr } from "../../ultils";

describe("Components -> Tickets", () => {
  describe("test render", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Tickets />);
    });

    test("should render the component without error", () => {
      expect(findTestByAttr(wrapper, "tickets").length).toBe(1);
    });

    test("should render error component when there is an error", () => {
      wrapper.setState({ isError: true });
      expect(findTestByAttr(wrapper, "error").length).toBe(1);
    });

    test("should render spinner when isLoading is true", () => {
      wrapper.setState({ isLoading: true });
      expect(
        findTestByAttr(wrapper, "spinner")
          .shallow()
          .find("span").length
      ).toBe(1);
    });
  });

  describe("test behaviour", () => {
    test("should call the getTicket() method after in componentDidMount", () => {
      let wrapper = shallow(<Tickets />);
      const instance = wrapper.instance();
      jest.spyOn(instance, "getTicket");
      instance.componentDidMount();
      expect(instance.getTicket).toHaveBeenCalledTimes(1);
    });
  });
});
