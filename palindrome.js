let string="nitin"

function reverse(string){

   let bag="";
for(leti=string.length-1; i>=0; i--){
  bag+=string[i];
}
return bag;
   }
   let reversed=reverse("string");
 if(string==reversed){
    console.log("Palindrome")
}
else{
console.log("Not")
}