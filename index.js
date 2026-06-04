import { createServer } from "node:http";
import fs from "fs";

const port = 8000;

const server = createServer();

server.on("request", async (req, res) => {
  let indexPage = await fs.promises.readFile("index.html", "utf-8");
  let aboutPage = await fs.promises.readFile("about.html", "utf-8");

  if (req.url == "/") {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.writeHead(200, { "content-type": "utf8" });
    res.write(indexPage);
    res.end();
  } else if (req.url == "/about") {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.writeHead(200, { "content-type": "utf8" });
    res.write(aboutPage);
    res.end();
  } else {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("404");
  }
});

server.listen(port);
