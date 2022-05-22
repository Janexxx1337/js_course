    //Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.

   let arr = [2, 7, 10, 18, 20, 838, -15, '16'];

   function checkArr (Obj) {
        

        for(let i = 0; i < Obj.length; i++) {
            if(Obj[i] % 2 === 0 && Obj[i] > 0 && typeof(Obj[i]) != 'string' ) {
                let result = Obj[i] * Obj[i];
                console.log(result);
            }

            
            
        }
       

   }
 
   checkArr (arr);
  

///
