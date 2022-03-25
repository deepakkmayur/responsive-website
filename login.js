var attempt=3;
function validate(){
   var email=document.getElementsById("email").value;
   var password=document.getElementsById("password").value;
   if(email=="deepakkmayur1@gmail.com" && password =="deepak"){
      alert("login successfull");
      window.location-"index.html";
      return false;
   }
   else{
      attempt--;
      alert("you have only "+attempt+"attempt left");
      if(attempt==0){
         document.getElementsById("email").disabled=true;
         document.getElementsById("password").disabled=true;
         document.getElementsById("submit").disabled=true;

         
      }
   }
}