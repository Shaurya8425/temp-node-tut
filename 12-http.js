const http=require('http')
const server=http.createServer((req,res)=>{
  if(req.url==='/'){
    res.end('Welcome to our home page')
  }
  if(req.url=='/about'){
    res.end('Here is our short history')
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page</p>
    <a href="/">back home</a>
    `)

  // console.log(req)
  // res.write('Welcome to our home page');
  // res.end()
})
server.listen(5000)