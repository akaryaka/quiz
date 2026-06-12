import { createServer } from "node:http";
import fs from "fs";

const port = 8000;

const server = createServer();

server.on("request", async (req, res) => {
  let indexPage = await fs.promises.readFile("views/index.html", "utf-8");
  let questionPage = await fs.promises.readFile("views/question.html", "utf-8");
  let resultPage = await fs.promises.readFile("views/result.html", "utf-8");

  if (req.url == "/") {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.writeHead(200, { "content-type": "utf8" });
    res.write(indexPage);
    res.end();
  } else if (req.url == "/question") {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.writeHead(200, { "content-type": "utf8" });
    res.write(questionPage);
    res.end();
  } else if (req.url == "/result") {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.writeHead(200, { "content-type": "utf8" });
    res.write(resultPage);
    res.end();
  } else {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("404");
  }
});

server.listen(port);
