// const fs=require('fs');
// const path=require('path');
// const initialpath=path.join(__dirname,'Assign2');
// fs.readdir('./Assign2/',(err,items)=>{
//     if(err){console.log(err);}
//     else{
//         console.log(items);
//        items.forEach((items)=>{
//         const filePath=path.join(initialpath,items);
//         fs.stat(filePath,(err,stats)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 if(stats.isDirectory(filePath)){
//                     fs.readdir(filePath,(err,items)=>{
//                         if(err){console.log(err);}
//                         else{
//                             console.log(items);
//                         }
//                     })
//                 }
//             }
//         })
//        })
//     }
// })


const fs = require('fs');
const path = require('path');

const initialPath = path.join(__dirname, 'Assign2');

function printAllFiles(dirPath) {
    fs.readdir(dirPath, (err, items) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        items.forEach(item => {
            const fullPath = path.join(dirPath, item);

            fs.stat(fullPath, (err, stats) => {
                if (err) {
                    console.error('Error reading file stats:', err);
                    return;
                }

                if (stats.isDirectory()) {
                    console.log('📁 Directory:', fullPath);
                    // Recurse into subdirectory
                    printAllFiles(fullPath);
                } else {
                    console.log('📄 File:', fullPath);
                }
            });
        });
    });
}

// Start the recursion
printAllFiles(initialPath);


// const fs=require('fs');
// const path=require('path');
// const initialPath=path.join(__dirname,'Assign2');
// function printAllFiles(dirname){
// fs.readdir(dirname,(err,items)=>{
//     if(err){
//         console.error(err);
//     }
//     else{
//         items.forEach((items)=>{
//             const newFilePath=path.join(dirname,items);
//             fs.stat(newFilePath,(err,stats)=>{
//                 if(err){
//                     console.log(err);
//                 }
//                 else{
//                     if(stats.isDirectory()){
//                     printAllFiles(newFilePath);
//                     }
//                     else{
//                         if(stats.isFile()){
//                             console.log(newFilePath);
//                         }
//                     }
//                 }
//             })
//         })
//     }
// })
// }

// printAllFiles(initialPath);

