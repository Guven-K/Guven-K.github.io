const software = document.getElementById("Software");

setInterval(() => {
  const cursor = document.querySelector('.cursor');
  cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
}, 500);
