function isPalindrome(name) {
   
    const lowerCaseName = name.toLowerCase();
    
    const reversedName = lowerCaseName.split('').reverse().join('');
   
    return lowerCaseName === reversedName;
}


const name = "radar";
const result = isPalindrome(name);

console.log(result); // Output: true