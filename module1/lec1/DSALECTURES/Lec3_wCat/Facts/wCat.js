const fs= require("fs");
let f1KaData=fs.readFileSync("./f1.txt","utf8");
let f2KaData=fs.readFileSync("./f2.txt","utf8");
let bothOutput=f1KaData+ "\n"+f2KaData;
console.log(bothOutput);

function applySFlag(f1KaData){
  let splittedData= f1KaData.split("\r\n");
for(let i= 0 ;i<splittedData.length;i++){
  
}


}
applySFlag(f1KaData);
