function calculateTotalExpenses(expenses) {
    let total = 0; // Initialize total to 0
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i]; 
    }
    return total; 
}


const weeklyExpenses = [200, 150, 100, 350, 50];


const totalExpenses = calculateTotalExpenses(weeklyExpenses);
console.log("Total Expenses: ₹" + totalExpenses);