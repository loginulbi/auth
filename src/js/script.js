// import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
// import { redirect } from 'https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/url.js';

// let token = getCookie("login");
// if (token === "") {
//   window.location.replace("https://login.ulbi.ac.id/");
//   redirect("https://login.ulbi.ac.id/");
// }

// import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { onClick } from 'https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/element.js';
import { redirect } from 'https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/url.js';

// let token = getCookie("login");
// if (token === "") {
//   window.location.replace("https://login.ulbi.ac.id/");
// }

onClick('HRIS', LoginHris);
function LoginHris() {
  setCookieWithExpireHour('redirect', window.location.href, 1);
  redirect('https://login.ulbi.ac.id/');
}

export function setCookieWithExpireHour(cname, cvalue, exhour) {
  const d = new Date();
  d.setTime(d.getTime() + (exhour * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  
  // Set domain to ulbi.ac.id to allow subdomains access
  let domain = "domain=.ulbi.ac.id"; 

  document.cookie = cname + "=" + cvalue + ";" + expires + ";" + domain + ";path=/";
}