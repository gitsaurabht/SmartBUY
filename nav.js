var a =document.querySelector(".ham");
var b=document.querySelector(".user_content");
var x=1;
a.addEventListener("click", function(){
    console.log("BUTTON CLICKED")
      if(x==1){
           b.style.display="flex";
           x=0;
      }
      else{
           b.style.display="none";
           x=1;
      }
})