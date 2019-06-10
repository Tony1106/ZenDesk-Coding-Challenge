import React from "react";
import { shallow, mount } from "../../setup";
import Ticket from "../../../src/components/Ticket";
import { BrowserRouter } from "react-router-dom";

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

  describe("tets render", () => {
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

    test("should render the right subject ", () => {
      expect(wrapper.find("[data-name='subject']").text()).toEqual("subject");
    });

    test("should render the right description with max 150 chars and add ' ...' in the end", () => {
      expect(wrapper.find("[data-name='description']").text()).toEqual(
        props.ticket.description.substring(0, 150) + " ..."
      );
    });
  });
});
