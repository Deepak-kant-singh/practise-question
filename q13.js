//JavaScript Program to Print the Fibonacci Sequence
const num=prompt("enter the number of terms");
let n1=0,n2=1,nextterm;
console.log('fibonacci series \n');
for(let i=1; i<=num;i++)
{
    console.log(n1);
    nextterm=n1+n2;
    n1=n2;
    n2=nextterm;
}