import http from "node:http";
import { routes } from "./routes";

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  const route = routes.find((routeObj) => {
    return routeObj.method === method && routeObj.path === url;
  });

  if (!route) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
    return;
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
