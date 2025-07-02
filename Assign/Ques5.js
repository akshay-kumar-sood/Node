//Task : read all the files , directory , dub folder present inside a targeted folder.

const fs=require('fs');
const path=require('path');
const initialPath=path.join(__dirname,'Assign2');
function printAllFiles(dirname){
fs.readdir(dirname,(err,items)=>{
    if(err){
        console.error(err);
    }
    else{
        items.forEach((items)=>{
            const newFilePath=path.join(dirname,items);
            fs.stat(newFilePath,(err,stats)=>{
                if(err){
                    console.log(err);
                }
                else{
                    if(stats.isDirectory()){
                        console.log('📁 Directory',newFilePath);
                    printAllFiles(newFilePath);
                    
                    }
                    else{
                        if(stats.isFile()){
                            console.log('📄 Folder',newFilePath);
                        }
                    }
                }
            })
        })
    }
})
}

printAllFiles(initialPath);
