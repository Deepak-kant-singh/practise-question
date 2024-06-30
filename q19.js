//JavaScript Program to Check Whether a String is Palindrome or Not
/*function checkpalindrome(strings)
{
    const len=strings.length;
    for(let i=0;i<len/2;i++)
    {
        if(strings[i]!==strings[len-1-i])
        {
            return 'it is not palindrome';
        }
    }
    return 'it is a palindrome';
}
const strings=prompt('enter the string');
const value=checkpalindrome(strings);
console.log(value);*/
function checkpalindrome(string)
{
    const arrayvalues=string.split('');
    const reversearray=arrayvalues.reverse();
    const reversestring=reversearray.join('');
    if(string== reversestring)
    {
        console.log('it is a palindrome');
    }
    else{
        console.log('it is not palindrome');
    }
}
const string=prompt("enter the string");
checkpalindrome(string);