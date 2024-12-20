let min = Infinity
let score = [56,72,48,90,65]



for(let i=0;i<score.length;i++){
    if(min > score[i]){
        min = score[i]
    }
        
}
console.log(min)