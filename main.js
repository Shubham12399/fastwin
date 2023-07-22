let home = document.querySelector('.home-section');
let invite = document.querySelector('.invite-section');
let recharge = document.querySelector('.recharge-section');
let my = document.querySelector('.my-section');
let icon = document.getElementsByClassName('bottom-nav-item');
let popUp = document.querySelector('.pop-up');
let popChild = document.querySelector('.pop-up a')
let refresh =  document.querySelector('.fi-rr-refresh');
let rechargeInput = document.querySelector('#rch-input');
function clearAll(){
      home.style.display="none";
      invite.style.display="none";
      recharge.style.display="none";
      my.style.display="none";
}

clearAll();
home.style.display="block";
function openpanel(e){
     clearAll();
     e.style.display="block";
}

let i;
function clearcolor(){
   for (i=0; i<=3;i++ ) {
       icon[i].style.color="#87CDFE";
   }   
}
 
for (i=0; i<=3;i++ ) {      
      icon[i].addEventListener("click" ,function(){
            clearcolor();
            this.style.color="#0092FF";
      });
}
if (home.style.display=="block") {
      icon[0].style.color="#0092FF";
}
document.body.style.overflow="hidden";
popUp.addEventListener('click' , function(){
       popUp.style.display="none";
       document.body.style.overflow="scroll";
       refresh.style.animation = "rotate .3s linear 3";
});

refresh.addEventListener("click" , function (){      
    refresh.style.animation = "rotate .3s linear 3";
    setTimeout(reuseAnim,1000);
    function reuseAnim(){          
          refresh.style.animationName="none";
    }
});

popChild.addEventListener("click",(e) => {
      e.stopPropagation();      
})
let moneyTag = document.getElementsByClassName("money-tag");
for(let i=0;i<moneyTag.length;i++){
      moneyTag[i].addEventListener("click" , function(){
           rechargeInput.value = this.firstElementChild.textContent
      })
      
}