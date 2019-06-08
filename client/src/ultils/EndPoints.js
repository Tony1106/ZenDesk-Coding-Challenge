export const endpoint = {
  baseURL: "http://localhost:4000",
  tickets: {
    getAllTickets: "/tickets",
    getPaginateTickets: "/tickets?per_page=%per_page%&page=%page%",
    getTicket: "/tickets/:id",
    getUser: "/user.json"
  }
};

export const makeEndPoint = (
  baseURL,
  services,
  isPagination,
  per_page,
  page
) => {
  if (isPagination) {
    return baseURL + services;
  }
};
