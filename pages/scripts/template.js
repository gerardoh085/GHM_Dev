
/*for minimizing the dashboard menu:*/
var btn = document.getElementById("logo-container");
var sidebar = document.querySelector(".navbar");
btn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

/*for a responsive navbar/dashboard when minimizing browser:*/
window.addEventListener("resize", () => {
    if (window.innerWidth <= 800) {
        sidebar.classList.add("active");
    } else {
        sidebar.classList.remove("active");
    }
});

var searchBar = document.getElementById("search");
var searchSVG = document.querySelector(".icon-search");

searchSVG.addEventListener("click", (events) => {
    events.preventDefault();
    var searchText = searchBar.value.trim();
    var url = "index.html";
    if (searchText) {
        url += "?search=" + encodeURIComponent(searchText);
    }
    window.location.href = url;



});