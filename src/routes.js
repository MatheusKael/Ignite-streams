const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, response) => {
      return "Hello World!";
    },
  },
  {
    method: "POST",
    path: "/login",
    handler: (request, response) => {
      return "Login";
    },
  },
];

export { routes };
