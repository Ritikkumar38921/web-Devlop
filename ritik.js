const btn1 = document.querySelector('.btn');
btn1.style.position = 'relative';
btn1.style.marginLeft = "48vw";
btn1.style.padding = '10px 20px 10px 20px';

const span = document.querySelector('.span');


btn1.style.color = 'red';
const b = document.querySelector('body');
simple = ['red','green','violet','gray','yellow','orange','blue','black','cyan','silver','rust','brown','purple','maroon','gold'];
btn1.addEventListener('click',function(){
  let len10 = simple.length;
  let r = parseInt(len10*Math.random());
  b.style.backgroundColor = simple[r];
  span.textContent = simple[r];
});