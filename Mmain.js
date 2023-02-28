/*const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
  let n = promp("Enter your name");
  
  if(n == null) {
    main.style.display = "none";
    cancel.style.display = "flex";
    msg.innerHTML = "mwua";
  }
  
  if (n.length > 0){
    alert("What if gusto kita");
    alert('what if Tayo nalang');
    alert('I love you ' + n);
    main.style.display = 'block';
    break;
  }
}*/

const main = document.querySelector(".main");
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
  let n = prompt("Enter your name")
  
  if(n == null){
    main.style.display= "none";
    cancel.style.display= "flex";
    msg.innerHTML = "thank you!!";
  }
  
  if (n.length >0) {
    alert("What if gusto kita?");
    alert('What if tayo nalang?');
    alert('What if magkita tayo?');
    alert('kainis na what if nayan');
    alert('umaasa tuloy ako');
    alert('ahh basta...');
    alert('I love You ' + n);
    alert('ehe ehe')
    main.style.display = "block";
    break;
  }
  
}