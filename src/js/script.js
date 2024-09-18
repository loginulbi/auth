import { setCookieWithExpireHour } from 'https://jscroot.github.io/cookie/croot.js';
import { redirect } from 'https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/url.js';

// Fungsi untuk menyimpan URL dan redirect ke halaman login
document.getElementById("simpelbiCard").addEventListener("click", function(event) {
  event.preventDefault();  // Mencegah default action dari link
  
  const targetUrl = this.href;  // URL dari link yang diklik
  setCookieWithExpireHour('redirect', targetUrl, 1);  // Menyimpan URL ke cookie "redirect" dengan durasi 1 jam
  
  redirect('https://login.ulbi.ac.id');  // Redirect ke halaman login setelah menyimpan URL
});

// Fungsi untuk menyimpan cookie dengan batas waktu (dalam jam)
function setCookieWithExpireHour(cname, cvalue, exhour) {
  const d = new Date();
  d.setTime(d.getTime() + (exhour * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = `${cname}=${cvalue};${expires};domain=.ulbi.ac.id;path=/`;
  console.log(`Cookie disetel: ${cname}=${cvalue}`);
}