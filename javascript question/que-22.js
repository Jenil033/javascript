function removeSpaces(message) {
    return message.replace(/\s+/g, ''); 
}


const message = "Hello World 2024";
const result = removeSpaces(message);

console.log(result); // Output: "HelloWorld2024"