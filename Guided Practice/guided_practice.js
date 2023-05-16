//access root element
const root = document.getElementById("root");
//create h1 with Mona Lisa
const h1 = document.createElement("h1");
h1.innerHTML = "MONA LISA";
//append h1 to root
root.appendChild(h1);
//set image to root
const img = document.createElement("img");
img.src = "./assets/mona_lisa.jpg";
img.width = 300;
root.appendChild(img);
//add paragraph desc
const p = document.createElement("p");
p.innerText = "The Mona Lisa is a famous painting.";
root.appendChild(p);
