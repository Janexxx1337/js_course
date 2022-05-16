'use strict';



const options = {
 name: 'test',
 width: 1024,
 height: 1024,
 mentor: "garryyyy",
 mentor: "larryyyy",
 mentor: "parryyyy",
 colors: {
     border: 'black',
     bg: 'red'
 },

 skills: {
     Garry: "Truman"
 },

 makeTest: function() {
     console.log('test');
 }
};

options.makeTest();

console.log(Object.keys(options).length);


const { border, bg} = options.colors;

console.log(border);