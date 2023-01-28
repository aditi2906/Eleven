const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'html');
app.set("locale", "en");
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
})

app.listen('3001', () => {
    console.log("server running on port 3001")
})