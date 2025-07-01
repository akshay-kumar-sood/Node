//Asynchronous way

const fs=require('fs');
const path=require('path');

const file='asynTest.txt';
const pathname=path.join(__dirname,file);

//CREATE FILE
//SYNTAX fs.writeFile(path,text,utf8)

fs.writeFile(pathname,'creating a async file','utf-8',(err)=>{
    if(err){
        console.err(err);
        return;
    }
    else{
        console.log("data entered successfully");
    }
});



//READ FILE
// SYNTAX fs.readFile(path,utf8,callback(err,data))

fs.readFile(pathname,'utf-8',(err,data)=>{
    if(err){
        console.err(err);
        return;
    }
    else{
        console.log(data);
    }
})

//UPDATE FILE
//SYNTAX fs.append

fs.appendFile(pathname,'\n adding new text',(err)=>{
    if(err){
        console.err(err);
        return;
    }
    else{
        console.log('data added successfully');
    }
});


//DELETE FILE
//SYNTAX fs.unlink(path,callback)

fs.unlink(pathname,(err)=>{
    if(err){
        console.err(err);
        return;
    }
    else{
        console.log("file has been deleted");
    }
})


//RENAME
//SYNTAX fs.rename(oldPath,newPth,callBack)

const newfile='asyncText.txt';
const newpath=path.join(__dirname,newfile);
fs.rename(pathname,newpath,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('file has been renamed');
    }
});