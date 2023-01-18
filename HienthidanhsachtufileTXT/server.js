const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    let dataFile = '';
    let html = '';
    fs.readFile('./data/data.txt','utf-8', (err, str) => {
            dataFile = str.split(",")
            dataFile.forEach((value, index) => {
                html += `
                <tr>
                <td>${index + 1}</td>
                <td>${value}</td>
                <td><button class = "btn btn-primary">delete</button></td>
                </tr>
                `;
            })
    })

    fs.readFile('./templates/index.html','utf-8', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        data = data.replace('{list-user}', html);
        res.write(data);
        res.end();
    });
}).listen(8000, () => {
    console.log("server is running on port 8000");
})
