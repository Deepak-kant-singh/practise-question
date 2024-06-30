//JavaScript Program to Find HCF or GCD
/*let hcf;
const num1=prompt("enter the 1st number");
const num2=prompt("enter the 2ns number");
for(let i=1;i<=num1 && i<=num2;i++)
{
    if(num1%i==0 &&num2==0)
    {
        hcf=i;
    }
}
console.log("hcf of"+num1+"and"+num2+"isv"+hcf);
*/
//JavaScript Program to Find LCM
const num1=prompt("enter the 1st number");
const num2=prompt("enter the 2ns number");
for(let i=1;i<=num1 && i<=num2;i++)
{
    if(num1%i==0 &&num2==0)
    {
        hcf=i;
    }
}
console.log("hcf of"+num1+"and"+num2+"isv"+hcf);
let lcm=(num1*num2)/hcf;
console.log("lcm= "+lcm);
