const birthDate = document.querySelector("#dob");
const luckyNum = document.querySelector("#num-lucky");
const checkBtn = document.querySelector("#btn-check");
const output = document.querySelector("#output");
const outputImg = document.querySelector("#output-img");

checkBtn.addEventListener("click",()=>{
    var birthDateValue = birthDate.value;
    var luckyNumValue = luckyNum.value;
    if(birthDateValue == ""){
        output.innerText = "Please enter your birth date to continue.";
    }else if(luckyNumValue == ""){
        output.innerText = "Please enter your lucky number to continue.";
    }else{
        checkLucky(birthDateValue,luckyNumValue);
    }
})

function checkLucky(birthDateValue,luckyNumValue){
    if(birthDateSum(birthDateValue) % luckyNumValue == 0){
        output.innerText = "😊 Your Birthday is Lucky!! 😊";
        outputImg.src = "/images/happy.svg";
    }
    else{
        output.innerText = "🥺 Your Birthday is not Lucky!! 🥺"
        outputImg.src = "/images/sad.svg";
    }
}

function birthDateSum(birthDateValue){
    var dob = birthDateValue.replaceAll("-","");
    var sum = 0;
    for(var i=0;i<dob.length;i++){
        sum += Number(dob.charAt(i));
    }
    return sum;
}