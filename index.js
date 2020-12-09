//const { response, json } = require('express');
const fetch=require('node-fetch');
const express=require('express');
const app = express();
//let json;
app.listen(3000,()=>console.log('Listening at port 3000'));
app.use('/public',express.static('public'));
app.get('/test',async (request,response)=>{
    const url = 'http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e055443a32f0471398420ff3ca57bd4d';
    const fetch_response = await fetch(url);
    const json = await fetch_response.json();
    response.json(json);
    //console.log(json);
});
/*async function getnews(){
    const url = 'http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e055443a32f0471398420ff3ca57bd4d';
    const fetch_response =await fetch(url);
    const json =await fetch_response.json();
    //response.json(json);
    console.log(json);////
     }
     getnews();*/
