const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about'){
        res.end('Theres nothing much to tell about us')
    }
    else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you're looking for.</p>
            <a href="/">Back to home</a>
        `)}
        })
server.listen(5000)