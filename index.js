const express = require('express');
const app = express();
const port = 3000;
var crypto = require("crypto")
var apikey;

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res) => {
  res.send('Hello world');
});

function generateApiKey() {
    return crypto.randomBytes(32).toString("hex")
}

app.get('/getkey',(req, res) => {
    apikey = generateApiKey();
    res.send(apikey)
});

app.post("/getaccess", (req,res) =>{
    let body = req.body;
    let myApiKey = body.apikey;
    if (myApiKey === apikey){
        res.send("Anda boleh akses");
    }
    else{res.send("Who ar u ngab?")};
})

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});