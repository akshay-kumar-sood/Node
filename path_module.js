//PATH MODULE
const path=require("path");
 console.log(__dirname);
 console.log(__filename);

//In window / linux \   \ mac OS
// join is used to make folder path according to differnrt operating system.


//school folder/students/data.txt
const filepath=path.join("folder","students","data.txt");
console.log(filepath);

const parseData=path.parse(filepath);      // give all property root,dir,ext,base,name
const resolvedpath=path.resolve(filepath); // give absolute path
const extname=path.extname(filepath);      // give extention name
const basename=path.basename(filepath);    // give filename
const dirname=path.dirname(filepath);      // give dir name 
const sep=path.sep;

console.log({parseData,resolvedpath,extname,basename,dirname,sep});

// single backsplash behave as escape character so double backsplash is used in console .