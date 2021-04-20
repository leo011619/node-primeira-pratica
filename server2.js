const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'

  })
  console.log('Respondendo...')
  switch (req.url) {
    case '/':
      res.end(`Você está na página inicial`)
      break
    case '/sobre':
      res.end(`Você está na página Sobre`)
      break
    case '/produtos':
      res.end(`Você está na página Produtos`)
      break
    default:
      res.end(`Ops! Parece que não encontramos a página ${req.url}`)
      break
  }
}).listen(3030, 'localhost')
