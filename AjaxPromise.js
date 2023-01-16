let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function makePromiseCall(methodType,url,async = true,data = null){
    return new Promise(function (resolve, reject) {
    //creating an object
     let xhr=new XMLHttpRequest();

     //registering event listener
     xhr.onreadystatechange = function()
     {
          console.log(methodType+" State Changed Called at: "+
                   xhr.readyState+" Status:"+xhr.status);
         if(xhr.status.toString().match('^[2][0-9]{2}$'))
         {
             resolve(xhr.responseText);
         }
          else if(xhr.status.toString().match('^[4,5][0-9]{2}$'))
          {
            reject({
                status: xhr.status,
                statusText: xhr.statusText
            });
            console.log("XHR Failed");
          }
       }            

    xhr.open(methodType,url,async);
    if(data) {
        console.log(JSON.stringify(data));
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send (JSON.stringify(data) ) ;
    }
   else xhr.send();
    console.log(methodType+" request sent to the server: ");
 }); 
}

const getURL="https://my-json-server.typicode.com/DhanshreePatil01/jsondata/employee/1";
makePromiseCall("GET", getURL, true)
  .then(responseText => {
      console.log("Get User Data: "+responseText)
  })   
  .catch(error => console.log("GET Error Status: "+
                               JSON.stringify(error)));

const deleteURL = "https://my-json-server.typicode.com/DhanshreePatil01/jsondata/employee/4" ;
makePromiseCall("DELETE", deleteURL, false)
  .then(responseText => {
    console.log("Get User Data: "+responseText)
  })   
  .catch(error => console.log("GET Error Status: "+
                             JSON.stringify(error)));

const postURL = "https://my-json-server.typicode.com/DhanshreePatil01/jsondata/employee";
const emplData =  {
    "name": "Diksha Landge",
    "gender": "Female"
  };
makePromiseCall("POST", postURL, true, emplData)
  .then( responseText => {
    console.log("User Added: "+responseText)
  })
  .catch(error => console.log("POST Error Status: "+
                              JSON.stringify(error)));
