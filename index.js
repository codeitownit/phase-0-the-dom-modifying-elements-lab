// Write your code here!

//removes main node
document.querySelector("main#main").remove();

//creates h1 node
const newHeader=document.createElement("h1");

// adds id to h1
newHeader.id="victory";

//adds text to h1 
newHeader.innerHTML="<p>Everlyn is the champion</p>";