const str = 'abracadabra';

function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelsCount = 0;
    
    str.split('').forEach(letter => {
        if (vowels.includes(letter))
            vowelsCount += 1;
    })
    
    return vowelsCount;
}

console.log(getCount(str));
