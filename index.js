// Write your code here!

main = document.querySelector("main");
main.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute('id','victory');
newHeader.textContent = "Michael Perkins is the champion";
document.body.append(newHeader);