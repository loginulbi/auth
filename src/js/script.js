<<<<<<< HEAD
import { onClick } from 'https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/element.js';
import { redirect } from 'https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/url.js';

onClick('HRIS', () => handleRedirect('HRIS'));

function handleRedirect(id) {
  let redirectUrl = '';

  // Buat kondisi untuk menetapkan cookie redirect sesuai dengan ID
  if (id === 'HRIS') {
    redirectUrl = 'https://euis.ulbi.ac.id/hris-dev/app/validasi-data.html';
  } else {
    // Anda bisa menambahkan kondisi lain jika ada ID tambahan
    redirectUrl = window.location.href;  // Default ke halaman saat ini
  }

  // Set cookie redirect berdasarkan ID yang dipilih
  setCookieWithExpireHour('redirect', redirectUrl, 1);
  
  // Redirect ke halaman login
  redirect('https://login.ulbi.ac.id/');
}

export function setCookieWithExpireHour(cname, cvalue, exhour) {
  const d = new Date();
  d.setTime(d.getTime() + (exhour * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  
  // Set domain to ulbi.ac.id to allow subdomains access
  let domain = "domain=.ulbi.ac.id"; 

  document.cookie = cname + "=" + cvalue + ";" + expires + ";" + domain + ";path=/";
  console.log(`Cookie set: ${cname}=${cvalue}; ${expires}; ${domain}; path=/`);
=======
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
>>>>>>> f41aae3eefd2019771793b691e3f522388d4130a
}