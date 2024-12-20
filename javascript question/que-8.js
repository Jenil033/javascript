function removeDuplicates(phoneNumbers) {
    return [...new Set(phoneNumbers)];
}

let phoneNumbers = [9876543210, 9123456789, 9876543210, 9000000000];
console.log("Unique phone numbers" + removeDuplicates(phoneNumbers));
