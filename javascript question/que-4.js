const avg=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    let avg;
    avg=sum/arr.length;
    console.log(`the total is ${sum} and avg salary is ${avg}`);
}

let array=[45000, 55000, 30000, 70000, 60000];
avg(array);