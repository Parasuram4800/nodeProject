// 1. Function Declaration
function addNumbers(a, b) {
  return a + b;
}
const sumResult = addNumbers(10, 20);
console.log(`Sum = ${sumResult}`);


// 2. Function with Parameters & Return Value
function calculateArea(length, width) {
  return length * width;
}
const length = 10;
const width = 5;
const area = calculateArea(length, width);
console.log(`Length = ${length}`);
console.log(`Width = ${width}`);
console.log(`Area = ${area}`);


// 3. Function Expression
const greetUser = function (name) {
  return `Welcome ${name}!`;
};
console.log(greetUser("John"));


// 4. Arrow Function – Basic
const multiplyNumbers = (a, b) => a * b;
console.log(`Result = ${multiplyNumbers(4, 5)}`);


// 5. Arrow Function – Multiple Parameters
const getUserInfo = (name, age) => `${name} is ${age} years old`;
console.log(getUserInfo("John", 25));


// 6. Arrow Function with Array
const numbers = [10, 20, 30, 40, 50];
const calculateTotal = (arr) => arr.reduce((acc, current) => acc + current, 0);
console.log(`Total = ${calculateTotal(numbers)}`);


// Users array for items 7 to 10
const users = [
  { name: "John", age: 25 },
  { name: "David", age: 30 },
  { name: "Sam", age: 20 }
];


// 7. map() with Arrow Function
const userNames = users.map((user) => user.name);
console.log(userNames);


// 8. filter() with Arrow Function
const usersOver25 = users.filter((user) => user.age > 25);
console.log(usersOver25);


// 9. find() with Arrow Function
const davidUser = users.find((user) => user.name === "David");
console.log(davidUser);


// 10. forEach() with Arrow Function
users.forEach((user) => {
  console.log(`${user.name} - ${user.age}`);
});


// 11. Callback Function
function processUser(name, callback) {
  callback(name);
}
processUser("John", (userName) => {
  console.log(`Processing user: ${userName}`);
});


// 12. Promise
const fetchUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data received successfully");
    }, 2000);
  });
};


// 13. Async/Await with try/catch
const getUser = async () => {
  try {
    console.log("Fetching user data...\n");
    const result = await fetchUserData();
    console.log(result);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

getUser();