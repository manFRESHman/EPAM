function main () {
    const panelsElements = document.querySelector('.wrapper');
    panelsElements.childNodes.forEach(function(elem){
        var panel = new Panel();
        panel.init(elem);
    });
}

function Panel() {
    this.init = function(elem) {
        elem.clicks = 0;
        elem.addEventListener("click", function() {
            this.clicks++;
            var i = document.querySelector('.' + this.className + '-counter');
            i.innerText = parseInt(this.clicks);
        });
    };
}

window.onload = main;