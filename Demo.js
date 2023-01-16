// function add(a,b,callback){
//     let result = a +b;
//     callback(result)
   
//   }
  
  
//   add(2,3, function(sum){
//       console.log("This sum is: "+sum)
//   })

//   function printwithDivider(sum){
// 	console.log("===========================This sum is "+sum+"===============")
// }

// add(2,3,printwithDivider)


//   add(5,4,function(printsum){
//     console.log("---------------------------Sum is: "+printsum+"-----------------");
//   })

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  function getWeather(city, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5a6a718ec618f142018c8ea5c67e3759`);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        callback(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  }
  
  getWeather("Paris", function(data) {
    console.log(data);
  });
   
  getWeather("Mumbai", function(data) {
    console.log(data);
  });

  function print(data)
  {
    console.log(data);
  }
  getWeather("Latur", print);