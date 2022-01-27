document.forms[0].onsubmit = function (e) {
  e.preventDefault();
};

let elementCounter = document.getElementsByClassName("input")[0];
let textOfElements = document.querySelector("[name ='texts']");
let typeOfElement = document.getElementsByClassName("input")[2];
let create = document.getElementsByName("create")[0];
let results = document.getElementsByClassName("results")[0];

// #  a function to remove all elements from any given element
function removeAllElements(parent) {
  console.log(`all ${Array.isArray(parent)}`);
  while (parent.children[0]) {
    parent.removeChild(parent.children[0]);
  }
}

create.onclick = function (e) {
  // # just in case if you want to breake your device i will stop you (:
  if (elementCounter.value > 1000) {
    e.preventDefault();
  }
  // # this remved all elements (change the value of the elements to empty string)
  // results.innerHTML = ""
  // # i called the explained function above it will remove all elemnts in (results)
  removeAllElements(results);
  // # for loop to add the new elements

  for (let i = 1; i <= elementCounter.value; i++) {
    if (typeOfElement.value == "Div") {
      newDiv = document.createElement("div");
      newDiv.className = "box";
      newDiv.id = `id-${i}`;
      newDiv.title = `Element ${i}`;
      newDiv.innerHTML = textOfElements.value;
      results.appendChild(newDiv);
    } else {
      newDiv = document.createElement("section");
      newDiv.className = "box";
      newDiv.id = `id-${i + 1}`;
      newDiv.title = "Element";
      newDiv.innerHTML = textOfElements.value;
      results.appendChild(newDiv);
    }
  }
};
let remove = document.getElementById("remove");
remove.onclick = () => removeAllElements(results);

// # the first time i made the element's removing funciton it was in remove element then i said why not make it in a global function that will be more easier to recall rather than remake it from scratch
// function () {
//   while (results.children[0]) {
//     results.removeChild(results.children[0]);
//   }
// };
