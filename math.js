//export more than one function as an object
const add = (a,b) => {
    return a+b;
};

const subtract = (a,b) => {
    return a-b;
};

module.exports = {
    add,
    subtract,
};

//--------------------------------------------------------

//directly export function without export object
module.exports.add = (a,b) => {
    return a+b;
};

module.exports.subtract = (a,b) => {
    return a-b;
};