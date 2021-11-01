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
