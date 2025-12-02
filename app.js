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
//IN LAST LECTURE OUT CODE WAS A SYNCHRONOUS CODE (JAVASCRIPT IS S SINGLE THREADED PROGRAMMING LANGUAGE)
//SO CODE FROM OUT LAST LECTURE EXECUTES ONE BY ONE IN THAT SINGLE THREAD
//ONLY WHEN LAST LINE OF CODE IS EXECUTED THUS IS WHY SYNCHRONOUS CODE ARE BLOCKING CODE
 //* READFILE IS AN METHOD AN API PROVIDED BY NODE BUT THIS
 //*METHOD RUNS ASYNCHRONOUSLY SO
 fs.readFile('./Files/input.txt', 'utf-8',//!this part gets executed in background ONCE THE DATA IS READ OUR CALL BACK FUNCTION GETS CALLED IN MAIN THREAD
    (err,data)=>{//! this call back function goes to main thread only when read file method reads file
    console.log(data); 
    /*uncomment to understand better//?console.log('reading file 2...')*/ 
 })
 console.log('reading file 2...')//! this part gets executed on main thread 
 