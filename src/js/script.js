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
}