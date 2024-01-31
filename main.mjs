//import/load ES Modules
/*
import add from "./math-esm.mjs";

console.log(add(5,5));
*/
//-----------------------------------------------
//import ES Modules as object
/*
import * as math from './math-esm.mjs';
const  {add, subtract} = math;

console.log(add(5,5));
console.log(subtract(8,5));
*/
//-------------------------------------------------
//import ES modules as object
//More common way
//import ES Modules as object
import {add, subtract} from './math-esm.mjs'; //more common way


console.log(add(5,5));
console.log(subtract(8,5));