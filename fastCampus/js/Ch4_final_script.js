function setMenu(_menu) {
    var filterButton = document.querySelectorAll("nav li");
    filterButton.forEach(function (filterButton) {
        filterButton.classList.remove("on");
    });
    document.querySelector("nav li." + _menu).classList.add("on");
    document.querySelector("main").className = _menu;
}

function setDescLength() {
    var descLengthSpan = document.querySelector("span.descLength");
    var descLengthInput = document.querySelector("input.description");
    descLengthSpan.innerHTML = descLengthInput.ariaValueMax.length + "/20";
}
