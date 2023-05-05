// // const rollNumbers : number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // const rollNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // const rollNumbers2: Array<string> = [
// //   "1",
// //   "2",
// //   "3",
// //   "4",
// //   "5",
// //   "6",
// //   "7",
// //   "8",
// //   "9",
// // ];

// // const rollNumbers3 : Array<boolean> = [true, false]

// type GenericArray<T> = Array<T>;

// const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const rollNumbers2: GenericArray<string> = ["1", "2", "3"];

// type NameRollType = { name: string; roll: number };

// const NameAndRollNumbers: GenericArray<NameRollType> = [
//   {
//     name: "John",
//     roll: 1,
//   },
//   {
//     name: "Jane",
//     roll: 2,
//   },
//   {
//     name: "Mary",
//     roll: 3,
//   },
//   {
//     name: "Mike",
//     roll: 4,
//   },
//   {
//     name: "Mile",
//     roll: 5,
//   }
// ];

// console.log(NameAndRollNumbers)





// type GenericTuple<X, Y> = [X, Y];

// const relation: GenericTuple<string, string> = ["Persian", "Kate Winslet"];

// type RelationWithSalaryType = { name: string; salary: number };

// interface RelationWithSalaryInterface {
//   name: string;
//   salary: number;
// }

// const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [
//   {
//     name: "Persian",
//     salary: 1000000000,
//   },
//   "Kate Winslet",
// ];

// const relationWithSalary2: GenericTuple<RelationWithSalaryType, string> = [
//   {
//     name: "Persian",
//     salary: 1000000000,
//   },
//   "Kate Winslet",
// ];