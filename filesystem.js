// const fs=require('fs');
//fs.writeFileSync('./demo.txt',"Data to be written in the file");



// fs.writeFile('./demo.txt', 'new data is added', (err) => {
//     if (err) console.error(err);
//     else console.log('Data written to file');
// });

// const data=fs.readFileSync('./demo.txt','utf-8')
// console.log(data);

// fs.readFile('./demo.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })


//if we do not want to overwrite but add along it
// fs.appendFile('./demo.text','\n new data addeed is new line using appendafile',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("data appended successfully");
//     }
// })

//unlink : to delete teh file

// fs.unlink('./demo.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

//check file exists or not return boolean
// const bool=fs.existsSync('./demo.txt');
// console.log(bool);


// fs.mkdir('./files', { recursive: true }, (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('Directory created');
//     }
// });