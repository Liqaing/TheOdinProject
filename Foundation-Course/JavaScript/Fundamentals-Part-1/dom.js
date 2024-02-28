// const container = document.querySelector("#container");

// const p = document.createElement("p");
// p.style.color = "red";
// p.textContent = "Hey I'm red!";

// container.appendChild(p);

// const h3 = document.createElement("h3");
// h3.style.color = "blue";
// h3.textContent = "I’m a blue h3!";

// container.appendChild(h3);

// const div = document.createElement("div");
// div.style.border = "1px solid black"
// div.style.background = "pink";

// const h1 = document.createElement("h1");
// h1.textContent = "I’m in a div";

// const pd = document.createElement("p");
// pd.textContent = "Me too";

// div.appendChild(h1);
// div.appendChild(pd);
// container.appendChild(div);

// const btn = document.querySelector("#btn");
// // btn.onclick = () => alert("Hello");
// // btn.addEventListener("click", () => alert("Hello World"))
// btn.addEventListener("click", (e) => {
//     // alert("Hello Worldq")
//     // alert(e.target)
//     console.log(e.target);
//     e.target.style.color = "blue";
// })

// const buttons = document.querySelectorAll("button");
// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         alert(button.id)
//     })
// }); 



addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM is fully loaded.');
});

addEventListener('load', (event) => {
    console.log('The page is fully loaded.');
});

addEventListener('beforeunload', (event) => {
    // show the confirmation dialog
    event.preventDefault();
    // Google Chrome requires returnValue to be set.
    event.returnValue = '';
    console.log("Are u sure");
});

addEventListener('unload', (event) => {
    // send analytic data
});