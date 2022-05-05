function login(){
    var user, pass;
    user=document.getElementById("USUARIO").value;
    pass=document.getElementById("CONTRASEÑA").value;

    if(user=="ronald" && pass =="daniel"){
        window.location= "paginadeadpool.html";

    }
}
function entrarconenter(){
    
    var user, pass;
    user=document.getElementById("USUARIO");
    pass=document.getElementById("CONTRASEÑA");

   
    user.addEventListener("keypress",(event)=>{
        //console.log("press",event.keyCode)
        if(event.keyCode == 13)
       {
           console.log("entrando")
              if(user.value=="ronald" && pass.value =="daniel"){
            //console.log("presionaste enter")
            window.location= "paginadeadpool.html";
            }
    
        } 
      
    });
}
entrarconenter()
function entrarconenter2(){

    var user, pass;
    user=document.getElementById("USUARIO");
    pass=document.getElementById("CONTRASEÑA");

   
    pass.addEventListener("keypress",(event)=>{
        //console.log("press",event.keyCode)
        if(event.keyCode == 13)
       {
           console.log("entrando")
              if(user.value=="ronald" && pass.value =="daniel"){
            //console.log("presionaste enter")
            window.location= "paginadeadpool.html";
            }
    
        } 
      
    });

}
entrarconenter2()