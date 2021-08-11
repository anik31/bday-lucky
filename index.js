const birthDate = document.querySelector("#dob");
const luckyNum = document.querySelector("#num-lucky");
const checkBtn = document.querySelector("#btn-check");
const output = document.querySelector("#output");

checkBtn.addEventListener("click",()=>{
    var birthDateValue = birthDate.value;
    var luckyNumValue = luckyNum.value;
    console.log(birthDateValue,luckyNumValue)
    checkLucky(birthDateValue,luckyNumValue);
})

function checkLucky(birthDateValue,luckyNumValue){
    if(birthDateSum(birthDateValue) % luckyNumValue == 0){
        output.innerText = "😊 Your Birthday is Lucky!! 😊";
    }
    else{
        output.innerText = "🥺 Your Birthday is not Lucky!! 🥺"
    }
}

function birthDateSum(birthDateValue){
    var dob = birthDateValue.replaceAll("-","");
    console.log(dob,typeof dob, dob.length)
    var sum = 0;
    for(var i=0;i<dob.length;i++){
        console.log(dob.charAt(i),typeof dob.charAt(i))
        sum += Number(dob.charAt(i));
    }
    console.log(sum);
    return sum;
}