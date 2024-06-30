//JavaScript Program to Check if the Numbers Have Same Last Digit
const a=prompt('enter the first number');
const b=prompt('enter the second number');
const c=prompt('enter the third integer');
const result1=a%10;
const result2=b%10;
const result3=c%10;

if(result1==result2 && result1== result3)
{
    console.log(result1+" "+result2+" "+result3+" have the same last digit number");
}
else{
    console.log("different number");
}