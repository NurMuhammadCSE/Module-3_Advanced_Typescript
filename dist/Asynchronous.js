"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = yield response.json();
    return data;
});
const getTodoData = () => __awaiter(void 0, void 0, void 0, function* () {
    const todo = yield getTodo();
    console.log(todo);
});
getTodoData();
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = "Data is Fetched from the server";
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to fetch data");
        }
    });
};
const makePromiseBoolean = () => {
    return new Promise((resolve, reject) => {
        const data = true;
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to fetch data");
        }
    });
};
const makePromiseObject = () => {
    return new Promise((resolve, reject) => {
        const data = {
            id: 1,
            name: "John Doe",
            age: 30,
            address: {
                city: "New York",
                state: "NY",
                country: "USA",
            },
        };
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to fetch data");
        }
    });
};
// const makePromiseObject = (): Promise<object> => {
//   return new Promise<object>((resolve, reject) => {
//     const data: object = {
//         id: 1,
//         name: "John Doe",
//         age: 30,
//         address: {
//             city: "New York",
//             state: "NY",
//             country: "USA"
//         }
//     };
//     if (data) {
//       resolve(data);
//     } else {
//       reject("Failed to fetch data");
//     }
//   });
// };
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    return data;
});
const getPromiseDataBoolean = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseBoolean();
    return data;
});
const getPromiseDataObject = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseObject();
    return data;
});
// Promise<string> Promise<boolean> Promise<object>
