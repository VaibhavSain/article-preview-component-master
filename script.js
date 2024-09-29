function Show() {
    var x = document.getElementById("arrow-down");
    var y = document.getElementById("social-icons");

    if(x.style.display === "none",
        y.style.display === "none"
    ) {
        x.style.display = "block";
        y.style.display = "block";
        
    }
    else {
        x.style.display = "none";
        y.style.display = "none";
    }
};