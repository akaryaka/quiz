import { createServer } from "node:http";

const port = 8000;

const server = createServer();

server.on("request", (req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("Привет, мир!");
});

server.listen(port);
