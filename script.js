var popoverlay = document.querySelector(".popup-overlay");
var addbox = document.querySelector(".add-box");
var addbutton = document.getElementById("add-button-id");
var cancelbutton = document.getElementById("cancel-popupf");

var addbook = document.getElementById("add-book");
var btitletitleinput = document.getElementById("book-name");
var btitleauthorinput = document.getElementById("author-name");
var btitledescinput = document.getElementById("book_desc");
var container = document.querySelector(".container");

addbutton.addEventListener("click", function () {
    popoverlay.style.display = "block";
    addbox.style.display = "block";
});

cancelbutton.addEventListener("click", function (event) {
    event.preventDefault();
    popoverlay.style.display = "none";
    addbox.style.display = "none";
});

addbook.addEventListener("click", function (event) {
    event.preventDefault();

    var div = document.createElement("div");
    div.setAttribute("class", "book-container");

    div.innerHTML = `
        <h2>${btitletitleinput.value}</h2>
        <h5>${btitleauthorinput.value}</h5>
        <p>${btitledescinput.value}</p>
        <button class="delete-btn">Delete</button>

    `;

    container.append(div);

    popoverlay.style.display = "none";
    addbox.style.display = "none";

    btitletitleinput.value = "";
    btitleauthorinput.value = "";
    btitledescinput.value = "";
});
container.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON" && event.target.textContent === "Delete") {
        event.target.parentElement.remove();
    }
});
