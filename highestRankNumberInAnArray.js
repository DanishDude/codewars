const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
const arr2 = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10] ;
const arr3 = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];

const highestRank = arr => {
    let element = [], count = [], highest = -1, maxI = [];

    arr.forEach((el, i) => {
        element.includes(el)
            ? count[element.indexOf(el)] += 1
            : element.push(el) && count.push(1);
    });

    count.forEach((c, i) => {
        if (c > highest) {
            maxI = [element[i]];
            highest = c;
        } else if (c === highest) {
            maxI.push(element[i]);
        }
    })

    return Math.max(...maxI);
}

console.log(highestRank(arr));
console.log(highestRank(arr2));
console.log(highestRank(arr3));
