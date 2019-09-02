const myArray = new Array(5)
funtion forFirstInput(num){
    var response = prompt(`enter first number`);
    if (Number.isFinite(response)){
        myArray.push(response);
        alert(`first number valid and accepted`)
        forSecondInput(num);
    }
    function forSecondinput(num){
        var response1 = prompt (`enter second number`);
        if (Number.isFinite(response2)){
            myArray.push(response1);
            alert(`second number valid and accepted`)
        }
    }
    const halfTotal= response + response1;
    function cheaker(num){
        if (halfTotal>9){
            forNextInputAboveNine();
        }
    }
    function forThirdInputAboveNine(){
        var response2 = prompt(`enter third number`)
        if (number.isFinite(response2)) && response2 <= halfTotal){
            myArray.push(response2);
            alert(`third number valid and accepted`)
        }
        var newChecker = halfTotal - response2;
    }
    function for 
}