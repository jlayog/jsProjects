//Check off tasks
const li = document.querySelectorAll("li");
const ul = document.querySelectorAll("ul");
const span = document.querySelectorAll("span");
const input = document.querySelector("input[type='text']");


// refactored code here
done();
remove();


//handle adding task via input
input.addEventListener("keypress", function(e) {
    //function starts only upon hitting the enter key
    if(e.which === 13) {
        // receiving text from input
        var todoText = this.value;
        // reset input box
        this.value = "";
        // create li
        var createLi = document.createElement("li");
        // set li to input value
        createLi.innerHTML = "<span>X</span> " + todoText;
        // append to ul to make li
        document.querySelector("ul").appendChild(createLi);
        // adding the eventlisteners to dynamically created elements.
        createLi.addEventListener("click", linethrough);
        createLi.addEventListener("click", fadeOut);
    }
});


//changing jquery fadeOut and remove to javascript
function remove() {
    for (var i = 0; i < span.length; i++) {
        span[i].addEventListener("click", fadeOut);
    };
};

function fadeOut() {
    if(event.target.localName === "span") {
        var removeLi = event.target.parentNode;
        // fadeout css
        removeLi.classList.add("fadeOut");
        // wait 600ms then remove li
        setTimeout(function() {
            removeLi.parentNode.removeChild(removeLi);
        }, 600);
    };
};

// Linethrough toggle
function done() {
    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener("click", linethrough);
    };
}

function linethrough() {
    this.classList.toggle("linethrough");
}
