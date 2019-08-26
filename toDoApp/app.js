//Check off tasks
var li = document.querySelectorAll("li");
var ul = document.querySelectorAll("ul");
var span = document.querySelectorAll("span");
var input = document.querySelector("input[type='text']");

for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function() {
        this.classList.toggle("linethrough");
    });
};  


//changing jquery fadeOut and remove to javascript (my brain hurts after this one)
for (var i = 0; i < span.length; i++) {
    span[i].addEventListener("click", function() {
        remove();
    });
};

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
    }
})



function remove() {
    if(event.target.localName === "span") {
        var removeLi = event.target.parentNode;
        // fadeout css
        removeLi.classList.add("fadeOut");
        // wait 600ms then remove li
        setTimeout(function() {
            removeLi.parentNode.removeChild(removeLi);
        }, 600);
    };
    event.stopPropagation;
};