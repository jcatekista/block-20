//copy of starter repo
const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];
//main code area
function main() {
  //grab root element
  const root = document.getElementById("root");
  //add h1 FREELANCERS and append
  const h1 = document.createElement("h1");
  h1.innerHTML = "FREELANCERS";
  root.appendChild(h1);
  //array for UL
  const data = ["Home", "Hawaii", "Washington", "Family", "Friends"];
  //create UL element
  const list = document.getElementById("myList");
  //loop through array and create li elements
  data.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    root.appendChild(li);
  });
}

//call the main function
main();
