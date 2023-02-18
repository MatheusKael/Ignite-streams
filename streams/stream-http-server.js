import http from "node:http";
import { Transform } from "node:stream";

class PositiveToNegative extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;
    console.log(transformed);
    callback(null, Buffer.from(String(transformed)));
  }
}

const server = http.createServer(async (req, res) => {
  return req.pipe(new PositiveToNegative()).pipe(res);
});

server.listen(3001, () => {
  console.log("Server running on port 3000");
});
