var userNum = prompt("Please enter a number")

checkEvenorOdd(userNum)


function checkEvenorOdd(userNum){

if (userNum%2 == 0 && userNum>0){
  alert("Your input is an even number")
} 

else if(userNum%2 == 1){
   alert("Your input is an odd number")
}


else{
   alert("Your input is '0'")
}

}