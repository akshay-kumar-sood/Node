//FILE ORGANISER

// In testFolder .txt .pdf .js files are present . task is to organise them into there respective folder.
// Means all js files move to js folder (create a folder if not there) and so on with other files.


const fs=require('fs');
const path=require('path');

const sourceFolder=path.join(__dirname,'testFolder');
fs.readdir(sourceFolder,(err,items)=>{
    if(err){
        console.log(err);
    }
    else{
        items.forEach((item)=>{
            const filePath=path.join(sourceFolder,item);
            if(path.extname(item)=='.txt'){
                const pathOftxt=path.join(sourceFolder,'txt');
                if(!fs.existsSync(pathOftxt)){
                    fs.mkdirSync(pathOftxt);
                }
                
                    const newLocation=path.join(pathOftxt,item);
                    fs.renameSync(filePath,newLocation);
                    //console.log('succesfull trasnfer txt file ');
                
            }
            else if(path.extname(item)=='.pdf'){
                const pathOfPdf=path.join(sourceFolder,'pdf');
                if(!fs.existsSync(pathOfPdf)){
                    fs.mkdirSync(pathOfPdf);
                }
                const newLocation=path.join(pathOfPdf,item);
                fs.renameSync(filePath,newLocation);
                //console.log('succesfull trasnfer pdf file ');
            }

            else if(path.extname(item)=='.js'){
                const pathOfJs=path.join(sourceFolder,'js');
                if(!fs.existsSync(pathOfJs)){
                    fs.mkdirSync(pathOfJs);
                }
                const newLocation=path.join(pathOfJs,item);
                fs.renameSync(filePath,newLocation);
                //console.log('succesfull trasnfer js file ');
            }
        })
    }
})

console.log('All Files are Organised');
