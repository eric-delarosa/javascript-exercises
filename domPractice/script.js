const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey I'm red!";
container.appendChild(para);

const header3 = document.createElement("h3");
header3.textContent = "I'm a blue h3!";
header3.style.color = "blue";
container.appendChild(header3);

const divEx = document.createElement("div");
divEx.style.cssText = "background-color: pink; border: 1px solid black;";
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
const pEx = document.createElement("p");
pEx.textContent = "ME TOO!";
divEx.appendChild(h1);
divEx.appendChild(pEx);
container.appendChild(divEx);


const btn = document.querySelector('#btn');
btn.addEventListener('click', function(e) {
    e.target.style.background = 'blue';
});


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
