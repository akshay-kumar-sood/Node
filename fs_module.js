//FILE SYSYTEM MODULE

//c create r read u update d delete
//SYNCHRONOUS WAY

//IMPORT MODULE
const fs=require('fs');
const path=require('path');

 // CREATE FILE
    const file='test1.txt';
    const pathname=path.join(__dirname,file);
    fs.writeFileSync(file,"creating a file",'utf-8');

// read file
 const readfile=fs.readFileSync(pathname);
 console.log(readfile.toString());

//orr  BEST

 const readfile2=fs.readFileSync(pathname,'utf-8');
 console.log(readfile);

//UPDATE

const appenddata=fs.appendFileSync(pathname,' adding more text 2','utf-8');

//UNLINK
fs.unlinkSync(pathname);

//RENAME 
const newfile='text.txt';
const newPathName=path.join(__dirname,newfile);
const renamefile=fs.renameSync(pathname,newPathName);

//CONCLUDE

const conclude={
    'newFile':'fs.writeFileSync',
    'readFile': 'fs.readFileSync',
    'updateFile':'fs.appendFileSync',
    'renameFile':'fs.renameSync'
}


