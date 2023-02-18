import http from "node:http";

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/") {
    res.end("Hello World");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
