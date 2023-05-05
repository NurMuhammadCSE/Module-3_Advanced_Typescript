interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data;
};

const getTodoData = async (): Promise<void> => {
  const todo = await getTodo();
  console.log(todo);
};

getTodoData();


const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data is Fetched from the server";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data");
    }
  });
};

const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data");
    }
  });
};

type DataType = {
  id: number;
  name: string;
  age: number;
  address: {
    city: string;
    state: string;
    country: string;
  };
};

const makePromiseObject = (): Promise<DataType> => {
  return new Promise<DataType>((resolve, reject) => {
    const data: DataType = {
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
    } else {
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

const getPromiseData = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};

const getPromiseDataBoolean = async (): Promise<boolean> => {
  const data = await makePromiseBoolean();
  return data;
};

const getPromiseDataObject = async (): Promise<DataType> => {
  const data = await makePromiseObject();
  return data;
};

// Promise<string> Promise<boolean> Promise<object>
