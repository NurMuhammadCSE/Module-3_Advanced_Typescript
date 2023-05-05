// // Arrow Function

// // const createArray = (param: string): string[] => {
// //   return [param];
// // };

// // const result1 = createArray('Bangladesh');

// // const result2 = createArray('United States of America');

// const createArray = (param: string): string[] => {
//   return [param];
// };

// const createArray2 = <T>(param: T): T[] => {
//   return [param];
// };

// const result1 = createArray("Bangladesh");

// const result2 = createArray2<string>("United States of America");

// const result3 = createArray2<boolean>(true);

// const result4 = createArray2<number>(1);

// const result5 = createArray2<object>({ name: "Bangladesh" });

// type Name = { name: string };
// const result51 = createArray2<Name>({ name: "Bangladesh" });



// //Spread Operator

// // const newData = {...myInfo ,crush};
// const addMeInMyCrushMind = <T>(myInfo: T) => {
//   const crush = "kate Winslet";
//   const newData = { ...myInfo, crush };
//   return newData;
// };

// const myInfo = {
//   name: "Persian",
//   age: 100,
//   salary: 100000000,
// };
// const result6 = addMeInMyCrushMind(myInfo);
// result6.crush