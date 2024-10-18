console.log("this web is developed by Moeez Rashid");
var main = document.querySelector("main");
var a1 = document.querySelector(".file");
var a2 = document.querySelector(".file1");
var a3 = document.querySelector(".file2");
var a4 = document.querySelector(".file3");
var a5 = document.querySelector(".file4");
var b1 = document.querySelector("#artist");
var b2 = document.querySelector("#albums");
var b3 = document.querySelector("#radio");
var b4 = document.querySelector("#Charts");
var b5 = document.querySelector("#Spotify");
var c1 = document.querySelector(".tex1");
var c2 = document.querySelector(".tex2");
var c3 = document.querySelector(".tex3");
var c4 = document.querySelector(".tex4");
var c5 = document.querySelector(".tex5");

b1.addEventListener("click", (e) => {
    a1.style.height = "100%";
    a1.style.flexWrap = "wrap";
    a1.style.overflow = "scroll";
    a2.style.display = "none";
    a3.style.display = "none";
    a4.style.display = "none";
    a5.style.display = "none";
    c2.style.display = "none";
    c3.style.display = "none";
    c4.style.display = "none";
    c5.style.display = "none";
})

b2.addEventListener("click", (e) => {
    a2.style.height = "100%";
    a2.style.flexWrap = "wrap";
    a2.style.overflow = "scroll";
    a1.style.display = "none";
    a3.style.display = "none";
    a4.style.display = "none";
    a5.style.display = "none";
    c1.style.display = "none";
    c3.style.display = "none";
    c4.style.display = "none";
    c5.style.display = "none";
})

b3.addEventListener("click", (e) => {
    a3.style.height = "100%";
    a3.style.flexWrap = "wrap";
    a3.style.overflow = "scroll";
    a1.style.display = "none";
    a2.style.display = "none";
    a4.style.display = "none";
    a5.style.display = "none";
    c1.style.display = "none";
    c2.style.display = "none";
    c4.style.display = "none";
    c5.style.display = "none";
})

b4.addEventListener("click", (e) => {
    a4.style.height = "100%";
    a4.style.flexWrap = "wrap";
    a4.style.overflow = "scroll";
    a1.style.display = "none";
    a2.style.display = "none";
    a3.style.display = "none";
    a5.style.display = "none";
    c1.style.display = "none";
    c2.style.display = "none";
    c3.style.display = "none";
    c5.style.display = "none";
})

b5.addEventListener("click", (e) => {
    a5.style.height = "100%";
    a5.style.flexWrap = "wrap";
    a5.style.overflow = "scroll";
    a1.style.display = "none";
    a2.style.display = "none";
    a3.style.display = "none";
    a4.style.display = "none";
    c1.style.display = "none";
    c2.style.display = "none";
    c3.style.display = "none";
    c4.style.display = "none";
})