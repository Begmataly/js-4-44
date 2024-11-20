// цикл do while

// let water = 0 

// do{
//     console.log('one litr water', water);
//     water=water+1
    
// }while(water<=11)

// let userName;

// do{
//     userName=prompt('What is your name ?')
// }while(userName==='')
//     console.log(userName);


// let number = 1;

// while(number<=6){
//     console.log('this is number' , number);
//     number++
    
// }
    

// for (number=1; number<7; number++){
//     console.log('this is san', number);
    
// }

// const cars=['Mersedes', 'BMW', 'Audi', 'Lamborgini']

// for(i=0; i<cars.length; i++){
//     console.log('My favorite cars', cars[i]);
    
// }


// JS-5

function doOperation(operation, a, b){
    return operation (a, b)
}

const operate=function(a,b){
    return a+b
    
}

const operate1=function(a, b){
    return a-b
}


console.log(doOperation(operate, 5, 6));
console.log(doOperation(operate1, 20, 7));

