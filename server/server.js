const express = require("express");
const bodyParser = require('body-parser');

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));

app.get("/", (req,res)=>{
    res.sendFile('form.html', { root: __dirname });
})

app.post("/", (req,res)=>{
    // パラメータ名、nameを出力
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}!`)
});
