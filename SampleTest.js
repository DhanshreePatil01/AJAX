// **************************synchronous behaviour**************************************************
// function add(a, b) {
//   return a + b;
// }

// console.log("First Print Statement");
// let result = add(3, 4);
// console.log(result);


// **************************Asynchronous behaviour**************************************************

// function add(a, b, callback) {
//     setTimeout(function() {
//       callback(a + b);
//     }, 1000);
//   }
  
//   add(3, 4, function(result) {
//     console.log(result); 
//   });
//   console.log("I am called first");


// function add(a, b) {
//     setTimeout(function() {
//      console.log("I am done with api call");
//  }, 10000);
    
//    return a + b;
//  }
 
//  let result = add(3, 4);
//  console.log(result); // Output: 7
 

// function add(a, b) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(a + b);
//       }, 10000);
//     });
//   }
  
//   add(3, 4).then(result => {
//     console.log(result);
//     console.log("I am priniting the result after 10 sec");

//   });

  fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.error(error))
  