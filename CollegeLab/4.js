const fs=require("fs");
const path=require("path");

const dataDir=path.join(__dirname,'file');

if(!fs.existsSync(dataDir)){
    fs.mkdirSync(dataDir);
}

//Create
function createFile(filename,data,callback){
    const filePath=path.join(dataDir,filename);
    fs.writeFile(filePath,data,err=>{
        if(err){
            callback(err);
            return;
        }
        callback(null,'File created successfully');
    });
}
//Read
function readFile(filename,callback){
    const filePath=path.join(dataDir,filename);

    fs.readFile(filePath,'utf8',(err,data)=>{
        if(err){
            callback(err);
            return;
        }
        callback(null,data);
    });
}

//update
function updateFile(filename,newData,callback){
    const filePath=path.join(dataDir,filename);

    fs.writeFile(filePath,newData,err =>{
        if(err){
            callback(err);
        };
        callback(null,'File updated Sucessfully');
    });
}

//delete
function deleteFile(filename,callback){
    const filePath=path.join(dataDir,filename);

    fs.unlink(filename,err =>{
        if(err){
            callback(err);
        }
        callback(null,'File deleted Sucessfully');
    });
}

//Example usage

const filename='example.txt';
const fileData='This is example data';


//Create a file 
createFile(filename,fileData,(err,message)=>{
    if(err){
        console.error('Error',err);
        return;
    }
    console.log(message);


//read the file 
readFile(filename,(err,data)=>{
    if(err){
        console.error('Error',err);
        return;
    }
    console.log('File content :',data);

const newData='New File data';
//updateFile
updateFile(filename,newData,(err,message)=>{
        if(err){
            console.error('Error',err);
            return;
        }
    console.log(message);

//Read the updated file
readFile(filename,(err,data)=>{
    if(err){
        console.error('Error',err);
        return;
    }
    console.log('Updated File content',data);

//Delete the file
deleteFile(filename,(err,message)=>{
        if(err){
            console.error('Error',err);
            return;
        }
     console.log(message);
});
});
});
});
});
