import { onClick } from 'https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/element.js';
import { redirect } from 'https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/url.js';

onClick('HRIS', () => handleRedirect('HRIS'));

function handleRedirect(id) {
  let redirectUrl;

  // Gunakan switch-case untuk menetapkan URL redirect sesuai dengan ID
  switch (id) {
    // Jika ID adalah 'HRIS', maka redirect ke URL HRIS
    case 'HRIS':
      redirectUrl = 'https://euis.ulbi.ac.id/hris-dev/app/validasi-data.html';
      break;

    // Jika ID adalah 'SIMPELBI', maka redirect ke URL SIMPELBI
    case 'simpelbiCard':
      redirectUrl = 'https://euis.ulbi.ac.id/simpelbi';
      break;

    // Default redirect ke halaman saat ini
    default:
      redirectUrl = window.location.href;
      break;
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