// A. Periodic Logger with File System Module
// Build a simple Node.js script that runs continuously and logs the current timestamp to a file named activity.log every 10 Seconds.
// Requirements
// 1. Use the fs module to write to a file.
// 2. The file name should be: activity.log
// 3. Every 2 minutes:
// o Get the current system time.
// o Format it in readable form (e.g., 2025-06-30 14:02:00).
// o Append this timestamp to the file activity.log with a message like:
// Log entry at 2025-06-30 14:02:00
// 4. Ensure:
// o If the file doesn't exist, it should be created.
// o If it exists, it should append to the file (not overwrite).

const fs=require('fs');
const path=require('path');
const file='activity.txt';
const filename=path.join(__dirname,file);
function getDate() {
  const now=new Date();
const month=String(now.getMonth() + 1).padStart(2,'0');
const date=String(now.getDate()).padStart(2,'0');
const min=String(now.getMinutes()).padStart(2,'0');
const hour=String(now.getHours()).padStart(2,'0');
const sec=String(now.getSeconds()).padStart(2,'0');
const year=String(now.getFullYear());
 return `${year}-${month}-${date} ${hour}-${min}-${sec}`;
}
function activity(){
    const dt = getDate();
fs.appendFileSync(filename,'Log entry at '+dt,'utf-8');
fs.appendFileSync(filename,'\n','utf-8');
}

let interval=setInterval(activity,2000);
activity();


// fs.truncate('./activity.txt',0,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("data cleared");
//     }
// })

