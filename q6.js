//Area When All Sides are Known
const s1=parseInt(prompt('enter the 1st side'));
const s2=parseInt(prompt('enter the 1st side'));
const s3=parseInt(prompt('enter the 1st side'));

const s=(s1+s2+s3)/2;
const area=Math.sqrt(s*(s-s1)*(s-s2)*(s-s3));
console.log('the area of triangle is ${area}');
