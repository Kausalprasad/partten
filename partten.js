function simplePyramid(){
    for(let i=1;i<=5;i++){
        for(let j=1;j<=i;j++){
            process.stdout.write("*")
        }
        console.log()
    }
}
simplePyramid()


console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

function FlippedSimplePyramid(){
    for(let i=1;i<=5;i++){
        for(let j=1;j<=5-i;j++){
            process.stdout.write(" ")
        }
        for(let k=1;k<=i;k++){
            process.stdout.write("*")
        }
        console.log()
    }
}
FlippedSimplePyramid()

console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

function inverredPyramid(){
    for(let i=1;i<=5;i++){
        for(let j=5;j>=i;j--){
            process.stdout.write("*")
        }
        console.log()
    }
}
inverredPyramid()
console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
function flippedInvertedPyramid(){
    for(let i=1;i<=5;i++){
        for(let j=1;j<=i;j++){
            process.stdout.write(" ")
        }
        for(let k=5;k>=i;k--){
            process.stdout.write("*")
        }
        console.log()

    }
}
flippedInvertedPyramid()


console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

function tringle(){
    for(let i=1;i<=5;i++){
        for(let j=1;j<=5-i;j++){
            process.stdout.write(" ");
        }
        for(let k=1;k<=i+(i-1);k++){
            process.stdout.write("*")
        }
        console.log()
    }
}
tringle()
console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
 function inverrtedTringle(){
    for(let i=5;i>=1;i--){
        for(let j=1;j<=5-i;j++){
            process.stdout.write(" ");
        }
        for(let k=1;k<=i+(i-1);k++){
            process.stdout.write("*")
        }
        console.log()
    }
}
inverrtedTringle()
console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

function halfDimond(){
    for(let i=1;i<=5;i++){
        for(let j=1;j<=i;j++){
            process.stdout.write("*")
        }
        console.log()
    }

for(let i=5-1;i>=1;i--){
    for(let j=1;j<=i;j++){
        process.stdout.write("*")
    }
    console.log()
}
    }
halfDimond()

console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
 
function flipped_half_diamond(){
    for(let i=1;i<=5;i++){
        for(let j=1;j<=5-i;j++){
            process.stdout.write(" ")
        }
        for(let k=1;k<=i;k++){
            process.stdout.write("*")
        }
        console.log()
    }

    for(let i=5-1;i>=1;i--){
        for(let j=1;j<=5-i;j++){
            process.stdout.write(" ")
        }
        for(let k=1;k<=i;k++){
            process.stdout.write("*")
        }
        console.log()
    }
}
flipped_half_diamond()

function dimond(){
    for(let i=1;i<=5;i++){
        for(let j=1;j<=5-i;j++){
            process.stdout.write(" ");
        }
        for(let k=1;k<=i+(i-1);k++){
            process.stdout.write("*")
        }
        console.log()
    }

    for(let i=5-1;i>=1;i--){
        for(let j=1;j<=5-i;j++){
            process.stdout.write(" ");
        }
        for(let k=1;k<=i+(i-1);k++){
            process.stdout.write("*")
        }
        console.log()
    }
}
dimond()

function Hourglass_partten(){
    for(let i=5;i>=1;i--){
        for(let j=1;j<=5-i;j++){
            process.stdout.write(" ")
        }
        for(let k=1;k<=i+(i-1);k++){
            process.stdout.write("*")
        }
        
        console.log()
    }
    for(let i=2;i<=5;i++){
        for(let j=1;j<=5-i;j++){
            process.stdout.write(" ");
        }
        for(let k=1;k<=i+(i-1);k++){
            process.stdout.write("*")
        }
        console.log()
    }
}
Hourglass_partten()

function numberPyarmid(){
    
    for(let i=1;i<=5;i++){
        let ans='';
        for(let j=1;j<=i;j++){
            ans=ans+i
    }
    console.log(ans)
}
}
numberPyarmid()

function Rotated_number_pyarmid(){
    for(let i=1;i<=5;i++){
        let ans=''
        for(let j=1;j<=5-i;j++){
            process.stdout.write(" ")
        }
        for(let k=0;k<i;k++){
            ans+=i+k;
        }
        console.log(ans)
    }

}
Rotated_number_pyarmid()


function palindrone_triangle(){

    for(let i=1;i<=5;i++){
        let ans='';
        for(let j=1;j<=5-i;j++){
            process.stdout.write(" ")
        }
        for(let k=0;k<i+(i-1);k++){
       
            ans+=k+i;
        }
        console.log(ans)
    }
}
palindrone_triangle()

function Alphabet_pyramid(){
    let alpha=65;
    for(let i=1;i<=5;i++){
        let ans='';
        for(let k=1;k<=i;k++){
           ans+=String.fromCharCode(alpha);
        }
        console.log(ans)
        alpha++;
      
    }
}
Alphabet_pyramid()


function alpha(){
    let alpha=65;
   
    for(let i=1;i<=5;i++){
        let str='';
        for(let j=1;j<=i;j++){
        str+=String.fromCharCode(alpha);
        alpha++
        }
        console.log(str)
     
    }
}
alpha()

