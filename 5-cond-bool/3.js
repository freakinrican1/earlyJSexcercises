var userNum = prompt("Please enter a number")

checkValid(userNum)


function checkValid(userNum){

if (userNum > 0 && userNum <= 10){
  console.log("Valid")
} 

else{
   console.log("Invalid")
}

}