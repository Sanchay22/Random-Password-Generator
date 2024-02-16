document.querySelector(".incr").onclick=function (){
    let num=document.querySelector(".slider").innerHTML;
    if(num<20){
        document.querySelector(".slider").innerHTML++;
    }random();
};
document.querySelector(".decr").onclick=function (){
    let num2=document.querySelector(".slider").innerHTML;
    if(num2>1){
        document.querySelector(".slider").innerHTML--;
    }random();
};
document.querySelector("#upper").onclick=function(){
    random();
}
document.querySelector("#lower").onclick=function(){
    random();
}
document.querySelector("#number").onclick=function(){
    random();
}
document.querySelector("#special").onclick=function(){
    random();
}
document.querySelector("body").onload=function(){
    random();
}
document.querySelector(".redo").onclick=function(){
    random();
}
document.querySelector(".copy-text").onclick=function(){
    let password=document.querySelector(".pass-text")
    navigator.clipboard.writeText(password.innerHTML)
    document.querySelector(".flash").classList.add( "animate--drop-in-fade-out" );
  setTimeout(function(){
    document.querySelector( ".flash" ).classList.remove( "animate--drop-in-fade-out" );
  }, 2000);
}
const random=()=>{
    let upper=document.querySelector("#upper").checked;
    let lower=document.querySelector("#lower").checked;
    let number=document.querySelector("#number").checked;
    let special=document.querySelector("#special").checked;
    if(upper||lower||number||special){
        let num3=document.querySelector(".slider").innerHTML;
        let pass="";
        let temp="";
        if(upper){
            temp=temp+"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }if(lower){
            temp=temp+"abcdefghijklmnopqrstuvwxyz";
        }if(number){
            temp=temp+"0123456789";
        }if(special){
            temp=temp+"@#$%^&!?";
        }let len=temp.length;
        for(let i=0;i<num3;i++){
            pass=pass+temp.charAt(Math.floor(Math.random()*len));
        }document.querySelector(".pass-text").innerHTML=pass;
    }
    else{
        alert("Please select any one of the above option")
    }
}
