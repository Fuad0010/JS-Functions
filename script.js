//#region Task1
// Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

let arr1 = [1,2,3,4,5];

console.log(doubleNumsSum(arr1));

function doubleNumsSum(array) {
    
    let isDouble=0;
    

   for (let i = 0; i < array.length; i++) {

        if ((array[i]%2)==0) 
        {
            isDouble += Math.pow(array[i],2);
        }    
    }
   return isDouble;       
}
//#endregion

//#region Task2
// Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

let arr2=[3,5,1,6,8,10,14,21,42]

let divideChecker=(array)=>{
    let isExist=[];
    for (let i = 0; i < array.length; i++) {
        if ((array[i]%3)==0 && (array[i]%7)==0) {

            isExist.push(array[i])
        }
    }
    return isExist;
}

console.log(divideChecker(arr2));

//#endregion