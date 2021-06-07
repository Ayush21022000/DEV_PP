const cheerio= require("cheerio");
const fs= require("fs");
let html1KaData=fs.readFileSync("./index.html","utf-8");
let myDocument=cheerio.load(html1KaData);
let h1KaData = myDocument("h1").text();
console.log(h1KaData);
