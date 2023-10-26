const section =document.querySelector('section'),
 showbtn  = document.querySelector('.showmodal'),
 closebtn =document.querySelector('.closebtn');

showbtn.addEventListener("click" , () => section.classList.add('active'));

closebtn.addEventListener("click" 
, () => section.classList.remove('active'));