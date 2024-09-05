import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

// Preloader
$(window).on("load", function (event) {
  $(".preloader").delay(500).fadeOut("slow");
});

let token = getCookie("login");
if (token === "") {
  window.location.replace("https://login.ulbi.ac.id/");
}