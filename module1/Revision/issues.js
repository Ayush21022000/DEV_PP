const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");

function getTopicProjects(topicName , topicLink){
    request(topicLink , function(err , res , data){
        processData(topicName , data);
    })
}
function processData(topicName , data){
    let myDocument = cheerio.load(data);
    let allProjectH1Tags = myDocument(".Link--primary.v-align-middle");
    
    
}
