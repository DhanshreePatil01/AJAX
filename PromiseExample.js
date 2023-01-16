const myPromise=new Promise((resolve,reject) => {
    const randomNumber=Math.random();
    if(randomNumber > 0.5) {
        resolve(randomNumber);
    }
    else {
        reject(new Error("Random number is too low: ${randomNumber}"));
    }
});

myPromise
   .then(result => {
       console.log(`Random number is greater than 0.5: ${result}`);
   })
   .catch(error => {
    console.log(`Error: ${error.message}`);
   });