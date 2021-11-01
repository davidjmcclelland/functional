import http from 'http';

const server = http.createServer((req, res) => {
    res.end('Hello from the server');
}).listen(4001);
const sayHello = name => `Hello ${name}`;

console.log(sayHello('srcDave'));
console.log('Server is up and running');

export default server;
const person = {
    name: "John Doe",
    age: 37
}
person.name = "mary";

// es6 function transformation
// regular old function
const oldFunction = function(arg1, arg2){
    return arg1 + arg2;
}

// 1:1 change to es6
const newFunction = (arg1, arg2) => {
    return arg1 + arg2;
}

// inlined es6 function

const inlineFunction = (arg1, arg2) => arg1 + arg2;

// inlined no args

const noArgs = () => console.log('noArgs');

// when returning an object you must wrap in parens

const getSomeData = () => ({
    name: 'John Doe',
    age: 90,
    job: 'Bug Factory'
});
