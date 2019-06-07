export const endpoint = {
  zendesk: {
    baseURL: "https://tony1106.zendesk.com/api/v2/",
    services: {
      getAllTickets: "tickets",
      getPaginateTickets: "tickets?per_page={value}&page{value}",
      getTicket: "tickets/:id",
      getUser: "user.json"
    }
  }
};
