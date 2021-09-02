let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let btn1 = document.querySelector('.btn');
btn1.style.position = 'relative';
btn1.style.marginLeft = "48vw";
btn1.style.padding = '10px 20px 10px 20px';
let body33 = document.querySelector('body');
let span = document.querySelector('.span');
btn1.style.color = 'red';
btn1.addEventListener('click',function(){
      let n = '#';
      for(let i=0;i<6;i++){
        n += hex[Math.floor(hex.length * Math.random())];
      }
      console.log(n);
      body33.style.backgroundColor = n;
      span.textContent = n;
    });
  
