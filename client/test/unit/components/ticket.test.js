import React from "react";
import { mount } from "../../setup";
import Ticket from "../../../src/components/Ticket";
import { BrowserRouter } from "react-router-dom";
import { findTestByAttr } from "../../ultils";

describe("Components -> Ticket", () => {
  describe("test props", () => {
    test("should allows us to set props ", () => {
      let props = {
        ticket: {
          subject: "subject",
          description: "description",
          status: "status",
          priority: "priority",
          id: "id"
        }
      };

      const wrapper = mount(
        <BrowserRouter>
          <Ticket {...props} />
        </BrowserRouter>
      );
      wrapper.setProps({ ticket: { subject: "newSubject" } });
      expect(wrapper.props().ticket.subject).toEqual("newSubject");
    });
  });

  describe("test render correct without error", () => {
    let wrapper;
    let props = {
      ticket: {
        subject: "subject",
        description:
          "Sunt incididunt officia proident elit anim ullamco reprehenderit ut. Aliqua sint amet aliquip cillum minim magna consequat excepteur fugiat exercitati 21321321321321adeasdasd",
        status: "status",
        priority: "priority",
        id: "id"
      }
    };
    beforeEach(() => {
      wrapper = mount(
        <BrowserRouter>
          <Ticket {...props} />
        </BrowserRouter>
      );
    });

    test("should render the subject ", () => {
      expect(findTestByAttr(wrapper, "subject").text()).toEqual("subject");
    });

    test("should render the description with max 150 chars and add ' ...' in the end", () => {
      expect(findTestByAttr(wrapper, "description").text()).toEqual(
        props.ticket.description.substring(0, 150) + " ..."
      );
    });
    test("should render the active button ", () => {
      expect(
        findTestByAttr(wrapper, "actionButton")
          .at(1)
          .text()
      ).toEqual("View Ticket");
    });
  });
});
