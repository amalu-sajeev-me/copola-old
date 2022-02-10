const print = (message) => () => console.log(message);

global.print = print;
