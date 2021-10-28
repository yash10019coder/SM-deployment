const express = require('express');
const fs = require('fs');
const app = express();

const path = './../SM-project/';
app.use(express.static(path));

const ip_address = '127.0.0.1';
const port = process.env.port || 30000;

// console.log('Server running at http://' + ip_address + ':' + port);

app.get('/', (req, res) => {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html');
    res.end(fs.readFileSync(path + 'index.html'));
});

app.get('/products', (req, res) => {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html');
    res.end(fs.readFileSync(path + 'products.html'));
})

app.get('/account', (req, res) => {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html');
    res.end(fs.readFileSync(path + 'account.html'));
});

app.get('/blog', (req, res) => { 
    res.send("sorry this page is not created yet");
})

app.get('/about_us', (req, res) => { 
    res.send("sorry this page is not created yet");
})

app.get('/contact_us', (req, res) => { 
    res.send("sorry this page is not created yet");
})

app.listen(port, () => {
    console.log('Server running at http://' + ip_address + ':' + port);
});

function callback(data, error) {
    if (error == null) {
        console.log(data, 'succesfully parsed');
    }
    else {
        console.log(error, 'error');
    }
}
