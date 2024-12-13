const http = require("http");
let homeCount = 0;
let aboutCount = 0;

const server = http.createServer((req, res) => {
  console.log("Запрос получен");
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(`<h1>Корневая страница</h1> 
        <a href = "/about">Ссылка на страницу /about</a> 
        <p>Количество посещений ${++homeCount}</p>`);
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(`<h1>Страница about</h1> 
        <a href = "/">Ссылка на главную страницу</a> 
        <p>Количество посещений ${++aboutCount}</p>`);
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(`
        <h1>Страница не найдена!</h1>
        `);
  }
});

server.listen(4000);