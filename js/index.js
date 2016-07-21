
 var link=document.querySelector('.account-menu-enter');
 var popup=document.querySelector('.login-popup');
 var close=document.querySelector('.login-popup-close');  

     link.addEventListener('click', function(event){
     event.preventDefault();
     popup.classList.add('login-popup-show');
     }, false);
                         
 close.addEventListener('click', function(event){
     event.preventDefault();
     popup.classList.remove('login-popup-show');
     }, false);
