console.log("********Library Collection********");
let books = ['Math', 'Physics', 'Programming Languages', 'Js Language','Learn Js', 'Js Programming','Python','Learn Html/css/Js']
console.log(books);
let counter = 0;
for(let i = 0 ; i<books.length ; i++){
    if(books[i].includes('Js')){
       console.log(books[i],' is about JavaScript');
     counter+=1;
    }
    else {
        console.log(books[i]);
    }
}
let Library = {
    nbBooks : books.length,
    ctrJsBooks : counter    
}
console.log("Number of Books is = ",Library.nbBooks);
console.log(Library.ctrJsBooks , " book about Js");



console.log("**************Grade Analyser***************");
let grades = [60, 80, 99 , 90 , 95 , 93 , 91 , 89 , 56 ] 
console.log(grades);
function calAverageGrades (numbers){
    let sum = 0 ;
    for(let ptr=0 ; ptr<numbers.length ; ptr++){
        sum+=numbers[ptr];
    }
    let average = sum / numbers.length;
    return average;
}
let ctrExlltGrade = 0;
for(let j = 0 ; j<grades.length ; j++){
    if(grades[j] >= 90 ){
        console.log('Grade' , grades[j] ,' is excellent');
        ctrExlltGrade +=1
    }
    else {
        console.log(grades[j]);
    }
}
let GradeAnalyser = {
    NbGrades : grades.length,
    totalExlltGrades : ctrExlltGrade,
    avarageGrades : calAverageGrades(grades) 
}
console.log('Total Numbers of Grades is = ' , GradeAnalyser.NbGrades);
console.log('Totale excellent grades in this class = ' , GradeAnalyser.totalExlltGrades);
console.log('Average Grade is = ' , GradeAnalyser.avarageGrades);


console.log("********Inventory Tracker********");
let inventory = [
    {
        name : 'item1' ,
        quantity : 5   
    },
    {
        name : 'item2' ,
        quantity : 4   
    },
    {
        name : 'item3' ,
        quantity : 40   
    },
    {
        name : 'item4' ,
        quantity : 10   
    },
    {
        name : 'item5' ,
        quantity : 2   
    }
]
let ctrItems = 0;
for(let k = 0 ; k<inventory.length ; k++){
    if(inventory[k].quantity < 5){
       console.log(inventory[k].name,'need restocking');
     ctrItems+=1;
    }
    else {
        console.log( inventory[k].name ," in the stock is ", inventory[k].quantity);
    }
}

let items = {
    Titems : inventory.length,
    RestockingItems : ctrItems
}
console.log("Totale items in the inventory : " , items.Titems);
console.log(items.RestockingItems , "items are must be restocking");
