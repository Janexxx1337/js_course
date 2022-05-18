"use strict";


// Место для первой задачи
const sum = '';


/* function calculateVolumeAndArea(num) {
     if (num % 1 == 0 && num > 0 ) {
          let V =  num * num * num;
          let S = num * num * 6;
          return `Обьем куба: ${V}, площадь всей поверхности: ${S}`;
     }
     else {
          return ('При вычисление произошла ошибка');
     }
}
 calculateVolumeAndArea(5);
 // */

/*  function getCoupeNumber(seat) {
     if (seat % 1 == 0 && seat >= 0) {
          if (seat >= 1 && seat <= 4) {
               return 1;
          }
          if (seat >= 5 && seat <= 8) {
               return 2;
          }
          if (seat >= 9 && seat <= 12) {
               return 3;    
          }
          if (seat >= 13 && seat <= 16) {
               return 4;
          }
          if (seat >= 17 && seat <= 20) {
               return 5;
          }
          if (seat >= 21 && seat <= 24) {
               return 6;
          }
          if (seat >= 25 && seat <= 28) {
               return 7;
          }
          if (seat >= 29 && seat <= 32) {
               return 8;
          }
          if (seat >= 33 && seat <= 36) {
               return 9;
          }
          if (seat == 0 || seat > 36) {
               return ('Таких мест в вагоне не существует');
          }
     }
     else {
          return ('Ошибка введен неправильный номер');
     }
}

getCoupeNumber(3);
 */


// Место для первой задачи
function firstTask(arr) {
     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения

     const result = [];

     for(let i = 0; i < arr.length; i++) {
          result[i] = arr[i];
     }
 
     
     // Не трогаем
     return result;
 }
 const kal = [3, 5, 8, 16, 20, 23, 50, 69, 77, 104];
 
 firstTask(kal);



 function secondTask(data) {
     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
 

     for (let i = 0; i < data.length; i++) {
          
         
          if (typeof(data[i]) == 'number') {
               data[i] = data[i] * 2;
               
          }

          if (typeof(data[i]) == 'string') {
               data[i] = `${data[i]} - Done`;
          }
     }
     // Не трогаем
     return data;
 }
 const data = [5, 10, 'Shopping', 20, 'Homework'];
 
 secondTask(data);



 function thirdTask(array) {
     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
     let x = 0; // Сохраняем переменную которую заменяемм
     let U = 0;// Cчетчик
     let y = 0;// Количество иттераций
     const result = [];
     if (array.length % 2 == 0) {
           y = array.length / 2;

     }
          else {
                y = (array.length - 1) / 2;
          }

     for(let i = 0; i < array.length; i++) {
               if (U == y) {
                    for(let i = 0; i < array.length; i++) {
                         result[i] = array[i];
                    }
                    return result;
               }
               x = array[array.length - i - 1];
               array[array.length - i - 1] = array[i];
               array[i] = x;
               U = U + 1;
     }
 
     // Пишем решение вот тут
     
     
  
 }

 let array = [5, 10, 'Shopping', 20, 'Homework'];

 thirdTask(array);