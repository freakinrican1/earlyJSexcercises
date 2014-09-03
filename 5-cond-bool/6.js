var userNum = prompt("Please enter a positive odd number")

checkPositiveOdd(userNum)


function checkPositiveOdd(userNum){

while(userNum%2 != 1){

   alert("Boo. I said a 'positive' 'odd' number")
   
   var userNum = prompt("Please enter a positive odd number")
   
}

  if (userNum%2 == 1 && userNum>0){
  alert("Thank you for following instructions")
} 

}
