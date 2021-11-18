const dateOfBirth= document.getElementById("date-of-birth");
const luckyNumber= document.getElementById("lucky-number");
const checkNumberButton= document.getElementById("check-number");
const message=document.getElementById("error-message");

// checkNumberButton.addEventListener("click", function getvalues(){

//     console.log(dateOfBirth.value)
//     console.log(luckyNumber.value)
//     console.log(typeof dateOfBirth.value)// typeof: it tells wat type of datatype it is
// })

checkNumberButton.addEventListener("click",checkBirthDateIsLucky);

function checkBirthDateIsLucky(){
 //   hideMessage();
const dob= dateOfBirth.value;
const sum= calculateSum(dob);
if(sum && dob){
    compareValues(sum,luckyNumber.value);
}
else{
    message.innerText="enter both field";
}

}

function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let i=0;i<dob.length;i++){
        sum=sum + Number(dob.charAt(i)) //Number change char(i) to number form since charAt convert into character
    }
return sum;
}

function compareValues(sum,luckyNumber){
    if(sum % luckyNumber===0){
        message.innerText="wow your birthday is lucky";
    }
    else{
        message.innerText="ohhoo your birthday is  not lucky";
    }
}

// function showMessage(msg){
//     message.style.display="block";
//     message.innertext=msg;
// }
// function hideMessage(){
//     message.style.display="none";
// }