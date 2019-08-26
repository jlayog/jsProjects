//Check off tasks
var li = document.querySelectorAll("li");
var span = document.querySelectorAll("span");

for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function() {
        this.classList.toggle("linethrough");
    });
};  


//changing jquery fadeOut and remove to javascript (my brain hurts after this one)
for (var i = 0; i < span.length; i++) {
    span[i].addEventListener("click", function(e) {
        if(e.target.localName === "span") {
            var removeLi = e.target.parentNode;
            // fadeout css
            removeLi.classList.add("fadeOut");
            // wait 600ms then remove li
            setTimeout(function() {
                removeLi.parentNode.removeChild(removeLi);
            }, 600);
        };
    })
};
