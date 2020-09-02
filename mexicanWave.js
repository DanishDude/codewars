function wave(str){
    const result = [];
    if (str === '') return result;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        const newStr = 
          str.substring(0, i) +
          str[i].toUpperCase() +
          str.substring(i+1);
    
        result.push(newStr);
      }
    }
    return result;
};

const str1 = 'Hello';
const str2 = 'two words';
const str3 = ' gap ';
const str4 = 'a       b    ';

console.log(wave(str1));
console.log(wave(str2));
console.log(wave(str3));
console.log(wave(str4));
