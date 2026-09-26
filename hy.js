/*let marks=[23,34,45,56,67,78,89,90];
let students=["John","Jane","Jim","Jill","Jack","Jenny","Joe","Jasmine"];
let idx=0;
/*for(let val of marks){
    console.log(`value of index ${idx} = ${val}`);
    let offer = val/10;
    marks[idx] = marks[idx] - offer;
    idx++;
}
console.log("Updated marks:", marks);

for(let i=0; i<marks.length;i++){
    let offer = marks[i]/10; console.log("Sum of two numbers is:", a+b);
    console.log("Subtraction of two numbers is:", a-
    marks[i] = marks[i] - offer;

}
console.log("Updated marks:", marks);
*/
/*const accowSum = (a,b) => {
    console.log("Sum of two numbers is:", a+b);
}
accowSum(10,20);
*/
/* function countvowels(str){
    let count=0;
    for(const char of str){
        if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
            count++;
        }
    }
    console.log("Number of vowels:", count);
}
countvowels("Hello");
*/
let arr =[1,2,3,4,5,6,7,8,9];
let evenarr = arr.filter((val)=>{
    return val%2==0;
});
console.log("Even numbers:", evenarr);

const output = evenarr.reduce((res ,curr)=>{
    return res+curr;
})
console.log("Sum of even numbers:", output);

