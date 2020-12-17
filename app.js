let bar = document.getElementById('bar');
let cancel = document.getElementById('cancel');
let dropdown = document.getElementsByClassName('mobile-list')[0];


bar.addEventListener("click", function(){
  if(dropdown.style.display == "block"){
    dropdown.style.display = "none"
  }else{
    dropdown.style.display = "block"
  }
  
})