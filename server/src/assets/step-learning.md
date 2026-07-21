1. npm init => add type: module
2. index.js

```js
import { createServer } from "node:http";

const port = 8000;

const server = createServer();

server.on("request", (req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("Привет, мир!");
});

server.listen(port);
```

3. package.json, add:

```json
 "serve": "node index.js"
```

4. Запускаем сервер и открываем браузер

```cmd
npm run serve
```
