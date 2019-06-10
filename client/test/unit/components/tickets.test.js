import React from "react";
import { mount, shallow } from "../../setup";
import Tickets from "../../../src/containers/Tickets";
import { BrowserRouter } from "react-router-dom";
import { findTestByAttr } from "../../ultils";
import { constant } from "../../../src/constant";

describe("Components -> Tickets", () => {
  describe("test state", () => {
    let wrraper = shallow(<Tickets />);
    test("should get the right number of ticket per page from constant", () => {});
  });
});
