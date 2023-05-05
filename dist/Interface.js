"use strict";
const user = {
    name: 'John',
    age: 20,
    role: 'admin'
};
console.log(user);
const userWithTypeAlias = {
    name: "string",
    age: 234,
};
userWithTypeAlias.age = 234;
const userWithTypeInterface = {
    name: "string",
    age: 234,
};
