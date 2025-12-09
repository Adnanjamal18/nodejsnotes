//!import statement
const readline = require('readline'); //?library(module) for read input output
const fs = require('fs'); //?(module)for reading and writing files 
const http = require('http');
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

// //!ecture 3
// //IN LAST LECTURE OUT CODE WAS A SYNCHRONOUS CODE (JAVASCRIPT IS S SINGLE THREADED PROGRAMMING LANGUAGE)
// //SO CODE FROM OUT LAST LECTURE EXECUTES ONE BY ONE IN THAT SINGLE THREAD
// //ONLY WHEN LAST LINE OF CODE IS EXECUTED THUS IS WHY SYNCHRONOUS CODE ARE BLOCKING CODE
//  //* READFILE IS AN METHOD AN API PROVIDED BY NODE BUT THIS
//  //*METHOD RUNS ASYNCHRONOUSLY SO
//  fs.readFile('./Files/input.txt', 'utf-8',//!this part gets executed in background ONCE THE DATA IS READ OUR CALL BACK FUNCTION GETS CALLED IN MAIN THREAD
//     (err,data)=>{//! this call back function goes to main thread only when read file method reads file
//     console.log(data); 
//     /*uncomment to understand better//?console.log('reading file 2...')*/ 
//  })
//  console.log('reading file 2...')//! this part gets executed on main thread 


// //!Lecture 4
// //on fs module we get read wrtite and more methods 
// //?readfile method reads file synchronously TO THIS METHOD WE PASS 3 ARGUMENTS FIRST IS PATH OF THE FILE 
// fs.readFile(`./Files/start.txt`, `utf-8`, (error1, data1/*first argumentn will carry returned error if there is any second will carry dara which is read*/
// ) => {
//     console.log(data1);
//     fs.readFile(`./Files/${data1}.txt`, 'utf-8', (error2, data2) => {
//         console.log(data2);

//         fs.readFile(`./Files/append.txt`, 'utf-8', (error3, data3) => {
//             console.log(data3);
//             fs.writeFile(`./Files/output.txt`, `${data2}\n\n${data3}\n\n date created= ${new Date()}`,
//                 () => {
//                     console.log('file written successfully');
//                 })
//         })
//     })
// })
// console.log('reading...');

// //!Lecture 5
// //? STEP ONE CREATE SERVER 
// //* WHEN A NEW REQUEST HITS THE SERVER THE CALL BACK FUNCTION RECIVES TWO, THE REQUEST AND RESPONSE
// //! AND THIS SERVER METHOD IS ALSO GOING TO RETURN THE SERVER OBJECT SO WE ASSIGN IT TO A VARIABLE
// const server = http.createServer((request, response)=>{
//  response.end('hello from the server') //?ON RESPONSE YOU CAN CALL END METHOD TO SEND A TEXT RESPONSE OR ANY RESPONCE YOU WILL SE THIS WRITTEN THERE  
// //THIS CALL BACK FUNC WILL BE EXECUTED EVERY TIME A NEW REQ HITS THE SERVER  
// console.log(' A NEW REQUEST RECIVED'); 
// //console.log(response);
// });
// //? STEP 2 START THE SERVER 
// //! ON THIS SERVER OBJECT, WE CAN CALL A METHOD CALLED LISTEN AND THIS LISTEN METHOD STARTS A NEW SERVER
// //! AND IT LISTENS TO THE NEW REQUESTS
// //? THIS LISTEN METHOD TAKES FEW PERAMETER AND THE FIRST PARAMETER IS PORT NUMBER WHERE THE APPLICATION IS RUNNING
// //? FOR THAT WE PASS 8000 THEN WE ALSO NEED TO SPACIFY THE HOST IN OUR CASE THE HOST IS GOING TO BE THE LOCAL HOST 
// //? AND FOR THE LOCAL HOST THE IP ADDRESS WILL BE 127.0.0.1
// //? AND THIRD PARAMETER IS A CALL BACK FUNCTION WHICH IS EXECUTED AS SOON AS THE SERVER ACTULLY STARTS LISTENING TO THE REQUEST
//               //!port, //!Host (ip),callback fun
// server.listen(8000, '127.0.0.1',() => {
//    console.log('server has started') 
// })
// //! NOW IF YOU RUN URL FOR OUR APPLICATION IN BROWSER A MESSAGE "A NEW REQUEST IS RECIVED" WILL BE SHOWN
// //! AND URL IN OUR CASE WILL BE "127.0.0.1:8000" GO AHEAD RUN THIS RUN IN TWO BROWSER AN CALLBACK FUNCTION OF CREATING SERVER WILL EXECUTE TWICE




 //! Lecture 6
//*An overview of how web works
//? Image 1.2.png
//* Here we have a client and a server and on server we are hosting 3 applications the node application
//* he java app and the .NETAPP all the applications run on the same server on ip address 192.168.20.134
//* on different port numbers node ap in on 8000 java app is on 4000 .netapp is on 3000
// lets say now you want to access the node app from our browser whichbis client in this case though it can be ios android or desktop app
// to access node app from our browser we need a url of that application in our case (www.noideapp.com) this is then domain name which is associated with this 
// node app application and wo we neet to type that domain name in this address bar and from this domain we
// want to access this (/Home) page as shown in image when we press enter the client is going to send req to
// the server then server is going to send back the response which is going to contains webpage we have requested
// for home page in our case so server is going to send us html of this home page
//? when we type a domain name how does the client know to which server it has to send the request 
//? and to which port number it has to access the application
// TODO TO UNDERSTAND THIS NODE APP.COM GOOGLE.COM FACEBOOK.COM THESE ARE NOT EVEN REAL NAME OF SERVER
// TODO THAT WE ARE TRYING TO ACCESS ITS JUST A NICE NAME SO EASY FOR US TO REMEMBER IN REALITY THE SERVER DOES NOT HAVE A NMEM 
// TODO IT HAS A IP ADDRESS FOR EXAMPLE OUR NODE APP IS HOSTED ON THIS IP ADDRESS 192.168.20.134
//? SO WHEN WE TYPE A NAME WE NEED A WAY TO CONVERT THIS DOMAIN NAME INTO THIS IP ADDRESS WHERE THE APPLICXATION IS HOSTED 
//? THIS HAPPENS THROUGH DNS , SO BEFORE MAKING REQUEST TO SERVER WHEN WE PRESS ENTER CLIENT FIRST MAKE
//? REQUEST TO DNS (DOMAIN NAME SERVER) WHICH IS LIKE PHONEBOOK OF INTERNET THE DNS IS RESPONSIBLE FOR 
//? MATCHING DOMAIN NAME TO ACTUAL IP ADDRESS OF THE SERVER SO IT SIMPLY MATCHES THE WEBADDRESS WE TYPE TO 
//? SERVER'S REAL IP ADDRESS (HTTPS://www.noideapp.com == HTTPS://192.168.20.134:8000/HOME) AND  ALSO EVERY APPLICATION IS HOSTED ON SOME PORT
//! SO AFTER THE DOMAIN NAME WE HAVE A COLON AND THEN PORT NUMBER WHERE APPLICATIN IS HOSTED
