const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.write('<html>');
        res.write('<head><title>Form</title></head>');
        res.write('<body><form action="/create-user" method="POST" ><input type="text" name="username" /><button type="submit" >Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }

    if (url === "/users") {
        res.write('<html>');
        res.write('<head><title>User List</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>')
        res.write('</html>');
        return res.end();
    }

    if (url === "/create-user" && method === "POST") {
        const body = [];
        req.on('data', (chunks) => {
            // console.log(chunks);
            body.push(chunks);
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody)
            const message = parsedBody.split('=')[1];
            console.log(message);
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
        })
    }

    res.setHeader('Content-Type', "text/html");
    res.write('<html>');
    res.write('<head><title>Greetings</title></head>');
    res.write('<body><h1>Greetings!, Welcome to this Page</h1></body>')
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;