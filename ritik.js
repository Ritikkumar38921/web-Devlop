const val = document.querySelector('.value');
const dec = document.querySelector('#decrease');
const reset = document.querySelector('#reset');
const inc = document.querySelector('#increase');
//reset


reset.addEventListener('click',function(){
  val.textContent = 0;
  if(parseInt(val.textContent) > 0){
    val.style.color = 'green';
  }else if(parseInt(val.textContent) < 0){
    val.style.color = 'red';
  }else{
    val.style.color = 'black';
  }
});

// decrease 
dec.addEventListener('click',function(){
 let store = val.textContent;

 val.textContent = parseInt(store) - 1;
 if(parseInt(val.textContent) > 0){
  val.style.color = 'green';
}else if(parseInt(val.textContent) < 0){
  val.style.color = 'red';
}else{
  val.style.color = 'black';
}
});
//increase


inc.addEventListener('click',function(){
 let store = val.textContent;
 val.textContent = parseInt(store) + 1;
 if(parseInt(val.textContent) > 0){
  val.style.color = 'green';
}else if(parseInt(val.textContent) < 0){
  val.style.color = 'red';
}else{
  val.style.color = 'black';
}
});
