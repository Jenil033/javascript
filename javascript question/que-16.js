function sortScoresDescending(scores) {
    const n = scores.length;
    
    // Bubble sort algorithm
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (scores[j] < scores[j + 1]) {
                // Swap scores[j] and scores[j + 1]
                const temp = scores[j];
                scores[j] = scores[j + 1];
                scores[j + 1] = temp;
            }
        }
    }
    
    return scores;
}

const scores = [10, 50, 30, 20];
const sortedScores = sortScoresDescending(scores);

console.log(sortedScores); // Output: [50, 30, 20, 10]