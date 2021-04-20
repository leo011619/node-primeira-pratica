const http = require("http");
http.createServer((req, res) => {
    // * Cliente (req)==>  "Quero os produtos"
    // ! Servidor <==(req) "Quero os produtos"
    // ! Servidor ==>(res) "Aqui estão os produtos"
    // * Cliente (res)<==  "Aqui estão os produtos"
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf8",
    });
    if (req.url === "/picles") return res.end("picles");
    if (req.url === "/pepinos") return res.end("pepinos");
    if (req.url === "/pessego") return res.end("pêssego");
    if (req.url === "/") return res.end("Vazio ;-;");
    return res.end("Não identificado");
  })
  .listen(3030, "localhost");
