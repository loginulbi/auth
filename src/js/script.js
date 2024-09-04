import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

let token = getCookie("login");
if (token === "") {
  window.location.replace("https://login.ulbi.ac.id/");
}