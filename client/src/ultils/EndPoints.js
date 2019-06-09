export const endpoint = {
  tickets: {
    getAllTickets: "/tickets",
    getPaginateTickets: "/tickets?per_page=%per_page%&page=%page%",
    getTicket: "/tickets/:id",
    getUser: "/user.json"
  }
};

export function makePaginationEndPoint(endpoint, per_page, page) {
  return (
    endpoint && endpoint.replace("%per_page%", per_page).replace("%page%", page)
  );
}
export function makeTicketEndPoint(url, id) {
  return url && url.replace(":id", id);
}
