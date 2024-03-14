//Length tapan function
function len(number){
    len=1
    while(number/10>=1){
        number=number/10;
        len+=1;
}
return len;
}

function isPalindrom(num){//123321
    length=len(num);
    mainNum=num
    reversedNum=0;
    for(var i=0; i<length;i++){
        reversedNum=reversedNum*10+(num%10);
        num=Math.floor(num/10)
}
if (reversedNum===mainNum){
    return true;
}
return false;
}
console.log(isPalindrom(12321))