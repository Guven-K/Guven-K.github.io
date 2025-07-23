const software = document.getElementById("Software");

setInterval(() => {
  const cursor = document.querySelector('.cursor');
  if (cursor) {
    cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
  }
}, 500);



const myObject = {
  myMethod() {
    let person = 'Maybe consider buying me a coffee, if you are impressed with my work. :)';
    console.log(person);
  }
};

myObject.myMethod();