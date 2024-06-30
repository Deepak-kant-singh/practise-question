//quadratic
let root1,root2;
let a=prompt('enter the 1st number');
let b=prompt("enter the 2nd number");
let c=prompt("enter the 3rd number");
let D=b*b -4*a*c;
if(D>0)
{
    root1=(-b+Math.sqrt(D))/(2*a);
    root2=(-b-Math.sqrt(D))/(2*a);

    console.log('the root of quadratic equation are'+root1+ 'and' +root2);

}
else (D==0)
{
    root1=root2=-b/(2*a);
    console.log('the root of quadratic equation are'+root1+ 'and' +root2);
}
