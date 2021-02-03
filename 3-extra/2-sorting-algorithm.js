/*
At the start of the course, you worked in teams to sort your team members, labelled by
numbers, in ascending or descending order.

Today, you will be applying the sorting algorithm you used in that exercise in code! 

Create a function called sortAges which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted ages in ascending order 
  - HARD MODE - without using the built-in javascript sort method 😎

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/
//FILTER METHOD
// function sortAges(arr) {
//   const justNumbers = arr.filter((valueArray) => {
//     return typeof valueArray === "number";
//   });
//   return justNumbers.sort(function (a, b) {
//     return a - b;
//   });
// }

//FOREACH METHOD
// function sortAges(arr) {
//   const justNumbers = [];
//   arr.forEach((valueArray) => {
//     if (typeof valueArray === "number") {
//       justNumbers.push(valueArray);
//     }
//   });
//   return justNumbers.sort(function (a, b) {
//     return a - b;
//   });
// }

//FOR LOOP METHOD-WITH SORT()
// function sortAges(arr) {
//   const justNumbers = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       justNumbers.push(arr[i]);
//     }
//   }
//   return justNumbers.sort(function (a, b) {
//     return a - b;
//   });
// }

// FOR LOOP METHOD-WITHOUT USING SORT()
function sortAges(arr) {
  const justNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      justNumbers.push(arr[i]);
    }
  }
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < justNumbers.length; i++) {
      if (justNumbers[i - 1] > justNumbers[i]) {
        done = false;
        var tmp = justNumbers[i - 1];
        justNumbers[i - 1] = justNumbers[i];
        justNumbers[i] = tmp;
      }
    }
  }
  return justNumbers;
}

// console.log(sortAges(agesCase2));

/* ======= TESTS - DO NOT MODIFY ===== */

const agesCase1 = [
  "🎹",
  100,
  "💩",
  55,
  "🥵",
  "🙈",
  45,
  "🍕",
  "Sanyia",
  66,
  "James",
  23,
  "🎖",
  "Ismeal",
];
const agesCase2 = ["28", 100, 60, 55, "75", "🍕", "Elamin"];

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "sortAges function works - case 1",
  arraysEqual(sortAges(agesCase1), [23, 45, 55, 66, 100])
);

test(
  "sortAges function works - case 2",
  arraysEqual(sortAges(agesCase2), [55, 60, 100])
);
