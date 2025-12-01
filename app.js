//!import statement
const readline= require('readline'); //?library(module) for read input output
const fs= require('fs'); //?(module)for reading and writing files 
/*
//!lecture 1
//? READING INPUT AND WRITING INPUT
const ri = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ri.question("please enter youn name:",(name)=>{
    console.log("you entered:"+name);
    ri.close();
})

ri.on('close',()=>{
    console.log("Interface closed");
    process.exit(0);
})
*/
// //!ecture 2
// //?Reading and writing to a file
// let teztIn = fs.readFileSync('./Files/input.txt','utf-8');
// console.log(teztIn);

// let content = `Data read from input.txt: ${teztIn}\nDate Created ${new Date()}`;//!use backticks (``) else string interpulation will be treated as normal string and you wont be able to run Date function or others if you use ('')
// //* inside single quotes ('') ${...} is teated as normal text
// fs.writeFileSync('./Files/output.txt',content)

//!ecture 3
