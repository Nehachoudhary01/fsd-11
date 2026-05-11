// console.time();

// let obj = {
//   name: "Reshab",
//   age: 27,
//   address: {
//     village: "Matiara Tok",
//     po: "Sarai",
//     city: "Vaishali",
//     state: "Bihar",
//   },
//   hobby: "Teaching", // make a function which would fetch all keys(nested obj also) inside the obj

//   skills: {
//     frontend: {
//       skill_1: "HTML",
//       skill_2: "CSS",
//       skill_3: "JS",
//       skill_4: "React",
//       skill_5: "NextJS",
//       component: {
//         project: "EMI calculator",
//         summary: {
//           emi: "Calc EMi",
//           data: {
//             hello: "Hello",
//           },
//         },
//       },
//     },
//     backend: {
//       skill_5: "NodeJs",
//       skill_6: "Express",
//       skill_7: "NestJS",
//     },
//     db: "MongoDb",
//   },
// };

// function ReturnKey(obj) {
//   for (i in obj) {
//     if (typeof (obj[i]) == "object") {
//     //   console.log(i);
//         ReturnKey(obj[i]);
//     }
//     else{
//         console.log(i);
//     }
//   }
// }
// ReturnKey(obj);

// console.timeEnd();

const arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
function array(arr) {
  let res = [];
  for (i of arr) {
    if (Array.isArray(i)) {
      res.push(...array(i));
    } else {
      res.push(i);
    }
   //spread operator and rest operator is (...) (it copies data)
  }return res
}
console.log(array(arr));
array(arr);
