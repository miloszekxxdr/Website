// Deletes the whole web content
document.body.innerHTML = '';

// Creates the iframe
let iframe = document.createElement('iframe');
iframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&loop=1';
iframe.style.position = 'fixed';
iframe.style.top = '0';
iframe.style.left = '0';
iframe.style.width = '100vw';
iframe.style.height = '100vh';
iframe.style.border = 'none';
iframe.allow = 'autoplay';

document.body.appendChild(iframe);
