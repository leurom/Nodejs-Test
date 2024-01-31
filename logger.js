var url = 'http://localhost:8080/log';
const EventEmitter = require('events'); //Is a Class!

class Logger extends EventEmitter{
    //Send HTTP request
    
    log(message) {
        console.log(message);
    
        this.emit('messageLogged', {id:1, url: 'http://'}); 
    }
}


module.exports = Logger;
//module.exports = log; only exports single function
//module.exports.endPoint = url;