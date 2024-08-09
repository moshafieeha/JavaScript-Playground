// Select the first <body> element in the document
const body = document.getElementsByTagName("body")[0];

/* .getElementsByTagName returns a live HTMLCollection, so we access the first element with [0].
In a well-formed HTML document, there is typically only one <body> element,
so we access it using [0] to get the first (and usually only) <body> element.
 */

// Create a new <div> element & append the newly created <div> to the <body> element
const div = document.createElement("div");
body.appendChild(div);

// Create a new <textarea> element & append the <textarea> to the <div> we just created
let text = document.createElement("textarea");
div.appendChild(text);

// Styling the <textarea>
text.style.backgroundColor = "green";
text.style.color = "white";
text.style.width = "300px";
text.style.height = "100px";

// Adding an event listener for the 'click' event on the textarea
text.onclick = function () {
  /*
    text.onclick: ؤssigns a function to the onclick property of the text textarea element.
    The onclick property is an event handler that is triggered when the textarea is clicked.

    function () { ... }: This is an anonymous function. It defines what should happen when
    the click event occurs. The function does not have a name and is defined inline.
    */

  document.querySelector("textarea").value +=
    "Click here and watch the text change ";
  /*
    document.querySelector("textarea"): This method selects the 1st <textarea> element in the document.
    It returns the element that matches the specified CSS selector.
    */
};

/////////////////////////////////////////////////////

// Set initial content for the textarea
text.value = "Hover over me!";

// Styling the textarea
text.style.backgroundColor = "blue";
text.style.color = "white";
text.style.width = "300px";
text.style.height = "100px";

// Adding an event listener for the 'mouseover' event on the textarea
text.onmouseover = function () {
  // This function executes when the mouse pointer enters the textarea
  this.style.backgroundColor = "red"; // Change the background color to red
};

// Adding an event listener for the 'mouseleave' event on the textarea
text.onmouseleave = function () {
  // This function executes when the mouse pointer leaves the textarea
  this.style.backgroundColor = "blue"; // Change the background color back to blue
};

/////////////////////////////////////////////////////

