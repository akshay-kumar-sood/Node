// C. List All Files in a Directory
// Read the contents of the documents/ folder and print the names of all files inside.
// Write a Node.js script that reads all the files inside a folder named documents/ and prints their names to the console.
// Requirements
// 1. The folder name is documents/.
// 2. The folder is located in the same directory as your script.
// 3. The script should:
// o Check if the folder exists.
// o List all items inside (files and subfolders).
// o Filter and print only file names, not directories.


const fs=require('fs');
const path=require('path');

const folderPath=path.join(__dirname,'assign');
fs.readdir(folderPath,(err,item)=>{
    if(err){
        console.error(err);
    }
    else{
        item.forEach((item)=>{

            const pathEachFile=path.join(folderPath,item);
            fs.stat(pathEachFile,(err,stats)=>{
                if(err){console.error(err);}
                else{
                    if(stats.isFile()){
                        console.log(item);
                    }
                }
            })
        })
        
    }
})
