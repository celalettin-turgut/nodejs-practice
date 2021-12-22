const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
  console.log("Bir istek gönderildi");
  console.log(req.method);
  const url = req.url;
  if (url === "/hakkimda") {
    res.write("<h2>About</h2>");
  } else if (url === "/") {
    res.write("<h2>Home</h2>");
  } else if (url === "/iletisim") {
    res.write("<h2>Contact</h2>");
  } else {
    res.write("<h1>Page does not exist</h1>");
  }
  res.end;
});

server.listen(PORT, () => {
  console.log(`Sunucumuz ${PORT} portunda calisiyor`);
});
