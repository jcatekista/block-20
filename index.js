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

function main() {
  const root = document.getElementById("root");

  const h1 = document.createElement("h1");
  h1.innerHTML = "FREELANCERS";
  root.appendChild(h1);

  let data = ["Home", "Hawaii", "Washington", "Family", "Friends"];

  let list = document.getElementById("myList");

  data.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    root.appendChild(li);
  });
}

//let list = ["Home", "Hawaii", "Washington", "Family", "Friends"]
//call the main function
main();
