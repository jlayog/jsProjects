//Check off tasks
const li = document.querySelectorAll("li");
const ul = document.querySelectorAll("ul");
const span = document.querySelectorAll("span");
const input = document.querySelector("input[type='text']");
const editIcon = document.querySelector(".la-pencil-square-o");


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
        createLi.innerHTML = "<span><i class='la la-trash-o'></i></span> " + todoText;
        // append to ul to make li
        document.querySelector("ul").appendChild(createLi);
        // adding the eventlisteners to dynamically created elements.
        createLi.addEventListener("click", linethrough);
        createLi.addEventListener("click", fadeOut);
    }
});


// fadeOut click
function remove() {
    for (var i = 0; i < span.length; i++) {
        span[i].addEventListener("click", fadeOut);
    };
};


// jQuery fadeOut effect
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

// Linethrough toggle click
function done() {
    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener("click", linethrough);
    };
}

function linethrough() {
    this.classList.toggle("linethrough");
}


editIcon.addEventListener("click", function() {
    if (input.style.display === "none") {
        input.style.display = "block";
        input.classList.remove("fadeOut");
        input.classList.add("show");
    } else {
        input.classList.remove("show");
        input.classList.add("fadeOut");
        setTimeout(function() {
            input.style.display = "none";
        }, 400);
    };   
});