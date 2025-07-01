const fs=require('fs');
fs.writeFile('./hello.txt',"creating a sample hello file",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("data added successfully");
    }
});