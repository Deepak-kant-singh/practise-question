//JavaScript Program to Check Prime Number
/*const num=prompt("enter the number");
let temp=1;
if(num==1)
{
    console.log("number is neither prime nor composite");
}
else if(num>1)
{
    for(i=2;i<num;i++)
    {
        if(num%i==0)
        {
            temp++;
            break;
        }
    }
    if(temp==1)
    {
        console.log("number is prime");
    }
    else{
        console.log("number is not prime");
    }
}
else{
    console.log("the number is not prime number");
}*/

//JavaScript Program to Print All Prime Numbers in an Interval
const low=prompt("enter the lowest number");
const high=prompt("enter the highest number");
for(let i=low;i<=high;i++)
{
    let flag=0;
    for(let j=2;j<i;j++)
    {
        if(i%j==0)
        {
            flag=1;
            break;
        }
    }
    if(i>1 && flag==0)
    {
        console.log(i);
    }
}