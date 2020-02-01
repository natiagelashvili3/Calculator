var li_items = document.querySelectorAll(".numbers-list li");

for(var i = 0; i<li_items.length; i++) {
    li_items[i].addEventListener('click', function() {
        var text = this.innerText;
        var screen = document.getElementById('screen-text');
        if(text == "=") {
            screen.innerText = eval(screen.innerText)
        } else {
            screen.innerText += text;
        }
    }); 
}
