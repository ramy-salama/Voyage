var myicon = document.getElementById("click"),
    myside = document.getElementById("sidebar");

myicon.onclick = function () {
    if (myside.classList.contains("hide")) {
        myside.classList = "show";
    } else {
        myside.classList = "hide";
    }
}

var sliderTimeoutID;
var element = 1;

function delayedSlider() {
    element == 6 ? element = 1 : element = element;
    element == 1 ? pElement = 5 : pElement = element - 1;
    document.getElementById("news" + pElement).style.display = "none";
    document.getElementById("news" + element).style.display = "block";
    document.getElementById("newsLink" + pElement).className = "newsLinks";
    document.getElementById("newsLink" + element).className = "newsLinks selected";
    sliderTimeoutID = window.setTimeout(delayedSlider, 6000);
    element++;
}

function showSlide(num) {
    window.clearTimeout(sliderTimeoutID);
    document.getElementById("news1").style.display = "none";
    document.getElementById("news2").style.display = "none";
    document.getElementById("news3").style.display = "none";
    document.getElementById("news4").style.display = "none";
    document.getElementById("news5").style.display = "none";
    document.getElementById("newsLink1").className = "newsLinks";
    document.getElementById("newsLink2").className = "newsLinks";
    document.getElementById("newsLink3").className = "newsLinks";
    document.getElementById("newsLink4").className = "newsLinks";
    document.getElementById("newsLink5").className = "newsLinks";
    document.getElementById("news" + num).style.display = "block";
    document.getElementById("newsLink" + num).className = "newsLinks selected";
    element = num + 1;
    sliderTimeoutID = window.setTimeout(delayedSlider, 6000);
}
delayedSlider();