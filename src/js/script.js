import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { redirect } from 'https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/url.js';

let token = getCookie("login");
if (token === "") {
  window.location.replace("https://login.ulbi.ac.id/");
  redirect("https://login.ulbi.ac.id/");
}