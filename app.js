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
//? SERVER'S REAL IP ADDRESS (HTTPS://www.noideapp.com/home == HTTPS://192.168.20.134:8000/HOME) "AND  ALSO EVERY APPLICATion
//?  IS HOSTED ON SOME PORT "
//! SO AFTER THE DOMAIN NAME WE HAVE A COLON AND THEN PORT NUMBER WHERE APPLICATIN IS HOSTED
//*once it finds that real ip address it sends real ip address to browser and then a TCP?IP connection is 
//* established between client and server and this connection will be kept alive for the entire time it takes 
//* to send the request and recive the response with all the files of the website 
//? tcp stands for transmission control protocol and ip for internet protocol together they are communiation 
//? protocol that defines exactly how the data transfers across the web 
//* and now the request is finally made
// //! and the request that we make is an http request 
//*http is just a protocol that allows server and client to communicate by sending request from the client to server
//* and reciving responses from server to client 

//?  NOW WHEN WE SEND HTTP REQUEST TO THE SERVER IT CONTAINS SOME INFORMATION WHICH THE SERVER NEEDS 
//? IN ORDER TO PROCESS THE REQUEST FOR EXAMPLE WE HAVE IN IMAGE 1.3 
//* FOR EXAMPLE WE ARE SENDING A GET REQUEST 
// GET = GET DATA 
// PUT = UPDATE AN EXISTING RECORD
// POST = TO CREATE NEW DATA ON SERVER 
// DELETE = TO DELETE A RECORD ON SERVER 

//?THEN THIS REQUEST ALSO GOT INFO OF WHICH RESOURCE WE ARE TRYING TO ACCESS FOR EXAMPLE /HOME IN OUR IMAGE 1.3
// THEN WE ALSO GOT THE HTTP VERSION IN OUR CASE 1.1 . AND THIS WHOLE FIRST LINE IS CALLED AS START LINE

// BELOW IT WE GOT REQUEST HEADERS , REQUEST HEADERS IS JUST SOME INFORMATION THAT WE SEND ABOUT THE REQUEST ITSELF
// AND THERE ARE TONS OF HEADERS AVAILABLE LIKE WHAT BROWSER WE USED AT WHAT TIME REQUEST WAS MADE USER'S BROWSER INFORMATION AND ETC

// AND WE ALSO MIGHT NEED TO SEND BODY OF THAT REQUEST FOR EXAMPLE HERE WE ARE SENDING A GET REQUEST SO BASICALLY WE WANT TOP FATCH SOME DATA FROM SERVER
// IN THAT CASE WE DONT NEED TO SEND A BODY 
//? LETS SAY WE ARE SENDING A POST REQUEST AND WHERE WE CREATE NEW DATA IN SERVER LETS SAY WE CREATE A NEW USER
//? SO WITH THAT POST REQUEST WE ALSO SEND INFORMATION ABOUT THE USER THE DATA WHICH WE WANT TO CREATE
//? IN THAT DATABASE SO IN THAT CASE THIS BODY WILLO HAVE SOME CONTENT WE DONT HAVE CONTROL ON HOW REQUEST WILL LOOK LIKE
//? HTTPS IS ENCRYPTED USING TLS OR SSL WHICH ARE YET SOME MORE PROTOCOLS
//? ONCE THE WEBPAGE (/HOME) I8S READY THE SERVER WILL SEND IT BACK AS HTTP RESPONSE AND IT TOO GOT A BODY

//? IN IMAGE 1.4 WE SHOW HOW EXACLY THE RESPONSE WILL LOOK LIKE . THE HTTP RESPONSE WILL CONTAIN INFORMATION LIKE\
//? WHETHER THE REQUEST WAS SUCCESSFUL OR NOT IF IT WAS SUCCESSFUL IT WILL SEND STATUS CODE 200 IF ITS 404 MEANS 
//? RESOURCE WE WANT TO ACCESS WAS NOT AVAILABLE ON SERVER THEN WE HAVE RESPONSE HEADER AND AGAIN IT CONTAINS INFORMATION ABOUT RESPONSE 
//? WHICH THE SERVER IS SENDING BACK AND WITH THE RESPONSE WE CAN ALSO SEND OUT OWN HEADERS WE CAN CREATE 
//? CUSTOM HEADERS AND SEND THEM WITH THE RESPONSE 
//? sINCE WE MADE A GET REQUEST ITS GOING TO SEND US A BODY IN WHICH THERE IS HTML OF /HOME PAGE
// TCP FIRST BREAKS THE RQUEST AND RESPONSES IN THOUSANDS OF CHUNKS OR PACKETS BEFORE THEY ARE SENT
// ONCE THEY ARE REACHED IT WILL REASSEMBLE ALL PACKETS INTO ORIGNAL REQUEST 
// NOW JOB OF IP IS TO ACTULLY SEND AND ROUTE ALL THESE PACKETS THROUGH THE INTERNET SO IT ENSURES THAT ALL PACKETS ARRIVE AT
// RIGHT DESTINATION BY USING IP ADDRSS ON EACH OF THESE PACKETS 


// //! LECTURE 7
//? how requestt response work
// html = fs.readFileSync('./Template/index.html', 'utf-8');
// //? BROWSER FIRST MAKES REQUEST TO FAVICON.KO THEN TO OUR URL
// //? STEP ONE CREATE SERVER
// const server = http.createServer((request,response)=>{
//     response.end(html)
//     console.log('A New request recived')
// })

// server.listen(8000,'127.0.0.1',()=>{
// console.log('server has started')
// })



// //! LECTURE 8
// //? WHAT IS ROUTING
// //? ROUTING DEFINES THE WAY IN WHICH THE CLIENT REQUESTS ARE HANDLED BY THE APPLICATION ENDPOINTS
// //* BY IMPLEMENTING ROUTING IN OUR APPLICATON WE CAN MAKE OUR APPLICATION RESPOND WITH DIFFERENT RESPONSES
// //* FOR DIFFERENT URLS
// //? FIRST OF ALL WE HAVE FILE BASED URL
// //!FILE BASED URL IS WHERE IN THE URL WE SPECIFY THE FILE NAME WHICH WE WANT TO ACCESS AND SEE IN THE BROWSER
// //? Eg  WWW.NODEAPP.COM/INDEX.HTML
// html = fs.readFileSync('./Template/index.html', 'utf-8');
// //? BROWSER FIRST MAKES REQUEST TO FAVICON.KO THEN TO OUR URL
// //? STEP ONE CREATE SERVER
// const server = http.createServer((request,response)=>{
//     let path = request.url;
//     if (path == '/'||path.toLocaleUpperCase()=='/home') {
//         response.end(html)
//     } else if (path.toLocaleLowerCase()=='/about') {
//         response.end('yoy are in about page')
//     } else if (path.toLocaleLowerCase()=='/contact') {
//         response.end('yoy are in contact page')
//     } else {
//         response.end ( ' page not found')
//     }

// })

// server.listen(8000,'127.0.0.1',()=>{
// console.log('server has started')
// })



//! LECTURE 9
// html = fs.readFileSync('./Template/index.html', 'utf-8')
// const server = http.createServer((request,response)=>{
//     let path = request.url;
//     if (path == '/'||path.toLocaleUpperCase()=='/home') {
//         response.end(html) //!the problem here is we cant send html response 
//!in our index.js file we are using style.css and script.js file when we run our server
//? the properties of index.html file do render (i.e h3 element and ) but not style we 
//? defined in style.css for h3(h3) element and paragraph(p) element so on the servr nodejs
//? is not able to find the file same is true for script.js file this is how noodejs works 
//? inn nodejs we cannot directly use static files so static assets ( css ifle , script file , images)
//     } else if (path.toLocaleLowerCase()=='/about') {
//         response.end('yoy are in about page')
//     } else if (path.toLocaleLowerCase()=='/contact') {
//         response.end('yoy are in contact page')
//     } else {
//         response.end ( ' page not found')
//     }

// })

// server.listen(8000,'127.0.0.1',()=>{
// console.log('server has started')
// })
//! for now we write new html
html = fs.readFileSync('././Template/index.html','utf-8')
