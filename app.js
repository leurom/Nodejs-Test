/*
var logger = require('./logger.js');
// require('./logger') geht auch

console.log(logger);
logger.log('hello');
//log('hello') if only the function was loaded 
*/
//----------------------------------------------------------------------------
/*
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);
*/
//----------------------------------------------------------------------------
/*
const os = require('os');
var freeMemory = os.freemem();
var totalMemory = os.totalmem();
console.log(freeMemory);

//Template string
//ES6 / ES2015 : ECMAScript 6
//Dynamic string
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
*/
//------------------------------------------------------------------------------
/*
const EventEmitter = require('events'); //Is a Class!

const Logger = require('./logger');
const logger = new Logger();
//Register listener, "addListener" and "on" the same
logger.on('messageLogged', function(arg){
    console.log('Listener called', arg);
});
logger.log('message');
*/
//------------------------------------------------------------------------------
/*
const http = require('http');
const server = http.createServer(function(req, res) {
    if (req.url =='/'){
        res.write('Hello world');
        res.end()
    }
    if (req.url =='/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});


server.listen(3000);
console.log('Listening on port 3000...');
*/
//-------------------------------------------------------------------------------
//Module Caching
//Second time the module is not loaded new, same object of Person will be returned
/*
const Person = require('./Name.js');
console.log(Person.getName());
Person.setName('Roman Leu');

const newPerson = require('./Name.js');
console.log(newPerson.getName());

//load class
const Person = require('./Name.js');
const person1 = new Person('roman');
*/
//--------------------------------------------------------------------------------
//load more than one function from a module
//load as an object
/*
const math = require('./math.js');
//console.log(math.add(3,4));
//console.log(math.subtract(3,4));
//-------------------------------------------
const {add, subtract} = math;
console.log(add(3,4));
console.log(subtract(3,4));
*/
//----------------------------------------------------------------------------------
//importing JSON
/*
const data = require('./data.json'); //Javascript object
console.log(data);
console.log(data.address.street);
*/
//----------------------------------------------------------------------------------
//Built in Modules
//Path module
/*
const path = require('node:path');
console.log(__dirname);
console.log(__filename);

console.log(path.basename(__dirname));
console.log(path.basename(__filename));

console.log(path.extname(__dirname));
console.log(path.extname(__filename));

console.log(path.parse(__filename)); //Object with properties
console.log(path.format((path.parse(__filename))));

console.log(path.join('folder1', 'folder2', 'data.json')); //Join to one string
console.log(path.join(__dirname, 'folder2', 'data.json')); //Join to one string

console.log(path.resolve('folder1', 'folder2', 'data2.json')); 
console.log(path.resolve(__dirname, 'folder2', 'data2.json')); 
console.log(path.resolve('/folder1', 'folder2', '../data2.json')); 
*/
//-----------------------------------------------------------------------------------
//Callback pattern/style (synchronous)
/*
function greet(name){
    console.log(`Hello ${name}`);
}
function hihgerOrderFunction(greetFn){
    const name = "roman";
    greetFn(name); //=> callback to greet function
}
hihgerOrderFunction(greet);
*/
//------------------------------------------------------------------------------------
//Events Module
/*
const EventEmitter = require('node:events');
const emitter = new EventEmitter();

emitter.on("order pizza", (size, topping) => {
    console.log(`order received ${size} pizza with ${topping}`);
});

emitter.on("order pizza", (size) => {
    if(size=="large"){
        console.log("Serving drink");
    }
});
console.log("Do work before order");
emitter.emit("order pizza", "large", "mushroom");
*/
//-----------------------------------------------
//Extending from EventEmitter
/*
const Pizzashop = require('./pizzashop.js');
const pizzashop1 = new Pizzashop();
const Drink = require('./drink.js');
const drink = new Drink();

pizzashop1.on("order", (size, topping) => {
    console.log(`order received ${size} pizza with ${topping}`);
    drink.serveDrink(size);
});
pizzashop1.order("large", "salami");
pizzashop1.displayOrderNumber();
*/
//------------------------------------------------------------------------------
//Streams and Buffers
/*
const buffer = new Buffer.from("Roman", "utf-8"); //Buffer feater is global, not necessary to import, "utf-8 is default"
console.log(buffer.toJSON()); //buffer.toJSON provides character codes
console.log(buffer); //contains raw binary data in base16/hexadezimal
console.log(buffer.toString());
buffer.write("Code");
console.log(buffer.toString());
*/
//------------------------------------------------------------------------------
//Asynchronous Javascript
//JS is a synchronous, blocking, single-threaded language
//solution Web browser for frontend and nodejs for backend
//------------------------------------------------------------------------------
//fs module
//fs internaly uses buffers
//...Sync method, javascript engine waits until method executed before move to the next line
/*
const fs = require('node:fs');
const { CLIENT_RENEG_LIMIT } = require('node:tls');
//read synchronous
const content = fs.readFileSync('./file.txt', 'utf-8'); //without "utf-8 it is just base16/hexadezimal format"
console.log(content);
//read asynchronous
fs.readFile('./file.txt', "utf-8", (error, data) => {   //Callback function(function that is passes as an argument to another function) 
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
});

//write file sync
fs.writeFileSync('./newfile.txt', 'Hello world');

//write file async
fs.writeFile('./newfile.txt', 'Hello roman', (err) => {
    if (err){
        console.log(err);
    }else{
        console.log("File written");
    }
});

//append a text
fs.writeFileSync('./newfile.txt', ' how are you?', {flag:"a"}, (err) => {
    if (err){
        console.log(err);
    }else{
        console.log("File written");
    }
});
const content = fs.readFileSync('./newfile.txt', 'utf-8'); //without "utf-8 it is just base16/hexadezimal format"
console.log(content);
*/
//-----------------------------------------------------------------------------------------------------------------
//fs promise module
/*
const fs = require('node:fs/promises');
//asynchronous
fs.readFile('file.txt', 'utf-8')
.then((data) => console.log(data)) //when promise results successfully
.catch((error) => console.log(error)); // when promise rejects with error

//same as before but easier to read as an async function
async function readFile() {
    try{
        const data = await fs.readFile('file.txt', 'utf-8');
        console.log(data);
    }catch(err) {
        console.log(err);
    }
}
*/
//----------------------------------------------------------------------------------------------------------------
//Streams
//extend from EventEmitter class, allows to add listeners to events 
/*
const fs = require('node:fs');

const readableStream = fs.createReadStream('./file.txt', {
    encoding: "utf-8",
    highWaterMark: 2,   //chunks of 2 bytes
});

const writeableStream = fs.createWriteStream('./file2.txt');
readableStream.on("data", (chunk) => {
    console.log(chunk);
    writeableStream.write(chunk);
});
*/
//----------------------------------------------------------------------------------------------------------------
//Pipes
/*
const fs = require('node:fs');
const zlib = require('node:zlib'); //provides compression functionality, allows to create zip files, built-in transform stream

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream('./file.txt', {
    encoding: "utf-8",
    highWaterMark: 2,   //chunks of 2 bytes
});

readableStream.pipe(gzip).pipe(fs.WriteStream('./file2.txt.gz')) //chaining with pip

const writeableStream = fs.createWriteStream('./file2.txt'); //no chaining with pip allowed
readableStream.pipe(writeableStream);
*/
//------------------------------------------------------------------------------------------------------------------
//HTTP Modules
//HTTP Module also extends EventsEmitter Class
//Creating node server
//JSON response
/*
const http = require('node:http');

const server = http.createServer((req, res) => {   //This callback function is actually an eventListener, when req reaches server then the callback function is executed
    const Person = {
        firstName: "Roman",
        lastName: "Leu",
    };
    
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(Person));
});
server.listen(3001, () => {
    console.log("Server running on port 3001");
});
*/
//HTML response
/*
const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {   //This callback function is actually an eventListener, when req reaches server then the callback function is executed
    res.writeHead(200, {"Content-Type": "text/html"});
    const html = fs.readFileSync(__dirname+'./index.html', 'utf-8');  //file content to be read before responding, loads whole content in one
    res.end(html);
    //fs.createReadStream('./index.html').pipe(res); //async, more performant when html is large, for statig pages
});
server.listen(3001, () => {
    console.log("Server running on port 3001");
});
*/
//-------------------------------------------------------------------------------------------------------------------------------
//HTML Template dynamic
/*
const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {   //This callback function is actually an eventListener, when req reaches server then the callback function is executed
    res.writeHead(200, {"Content-Type": "text/html"});
    const name = "roman";
    let html = fs.readFileSync('./index.html', 'utf-8');  //file content to be read before responding, loads whole content in one
    html = html.replace("{{name}}", name);
    res.end(html);
});
server.listen(3001, () => {
    console.log("Server running on port 3001");
});
*/
//--------------------------------------------------------------------------------------------------------------------------------
//Simple HTTP Routing
/*
const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {   //This callback function is actually an eventListener, when req reaches server then the callback function is executed
    //req.method => GET, POST, DELETE...
    if(req.url=="/"){
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end("Welcome to Home Page");
    }if(req.url=="/about"){
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end("Welcome to About Page");
    }if(req.url=="/api"){
        res.writeHead(200, {"Content-Type":"application/json"});
        const content = fs.readFileSync("./data.json", "utf-8")
        res.end(JSON.stringify(content));
    }else{
        res.writeHead(404);
        res.end("Page not found");
    }
});
server.listen(3001, () => {
    console.log("Server running on port 3001");
});
*/
//---------------------------------------------------------------------------------------------------------------------------------
//libuv Thread Pool
/*
const fs = require('node:fs');
const crypto = require("node:crypto");


onst maxcalls = 5;
const start = Date.now();

for (let i=0; i<maxcalls; i++) {
    crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
    console.log(`Hash: ${i+1}`, Date.now()-start);
}
*/
//---------------------------------------------------------------------------------------------------------------------------------
//Increasing Thread Pool size (Limited to number of cpu cores)
//Does not apply to network i/o for example https.requests, is not a cpu bound operation and does not use thread pool, Libuv delegates work to operating system kernel
/*
const crypto = require("node:crypto");
process.env.UV_THREADPOOL_SIZE = 5;
const maxcalls = 5;
const start = Date.now();


for (let i=0; i<maxcalls; i++) {
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
        console.log(`Hash: ${i+1}`, Date.now()-start);
    });
}
*/
//----------------------------------------------------------------------------------------------------------------------
//npm
//largest software library for javascript
//software package manager 
//to create a new package => npm init
//uninstall package => npm uninstall packagename
//package is now like a modul
//npm install => reads package.json file and installs all the modules
/*
const upperCase = require("upper-case").upperCase;
console.log(upperCase("Hello World"));
*/
//----------------------------------------------------------------------------------------------------------------------
//Versioning
//npm install packagename@2.0.0 => installs specific version of package
//Semantic versioning = X.Y.Z., X=Major version Y=Minor version Z=Patch
//fix bug and cod stays backwards compatible => patch version, 1.1.1 =>1.1.2
//add new functionality and backwards compatible => minor version and patch to zero, 1.1.1 =>1.2.0
//making changes and code no more backwards compatible => major change, 1.1.1 => 2.0.0
//always start with 0.1.0, production ready => 1.0.0

//npm scripts
//bundle common commands for use in a project, stored in package.json file
//for example to build project, starting a development server, compiling css,...
//script to start app.js and run with "npm run start"
/*
"scripts": {
    "start": "node app.js"
  }
*/


