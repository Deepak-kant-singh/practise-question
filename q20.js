//JavaScript Program to Sort Words in Alphabetical Order
const string=prompt('enter the sentence');
const words=string.split('');
words.sort();
console.log('the sorted words are: ');
for(const element of words)
{
    console.log(element);
}