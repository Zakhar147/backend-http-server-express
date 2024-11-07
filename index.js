const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Context-type': 'text/html'});

    const url = req.url; 
    if(url==='/about') 
    {
        res.write(`<h1>about us page</h1>`);
        res.end();
    }
    else if (url==='/contact') 
    {
        res.write('<h1>contact us page</h1>');
        res.end();
    }
    else 
    {
        res.write('<h1>Hello World!</h1>');
        res.write('<h2>My name is Zakhar</h2>')
        res.end()
    }

});

server.listen(port, () => {
    console.log(`Server is listening at ${port} port`)
})