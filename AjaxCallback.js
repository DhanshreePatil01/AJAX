let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function showTime()
{
  const date = new Date ( ) ;
  return date. getHours( ) + "Hrs:" + date. getMinutes( ) + "Mins:" +date. getSeconds( )+ "Secs";
}

function makeAJAXCall(methodType,url,callback,async = true,data = null){
    //creating an object
    let xhr=new XMLHttpRequest();

    //registering event listener
    xhr.onreadystatechange = function(){
        //  console.log(methodType+" State Changed Called at: "+showTime()+" RS: "+
        //            xhr.readyState+" Status:"+xhr.status);
        if(xhr.readyState === 4) {
            //Matching all 200 Series Responses
            if(xhr.status === 200 || xhr.status === 201) {
                callback(xhr.responseText);
            }else if(xhr.status >= 400) {
                console.log("Handle 400 Client Error or 500 Server Error"+showTime());
            }
        }            

    }
    xhr.open(methodType,url,async);
    if(data) {
        console.log(JSON.stringify(data));
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send (JSON. stringify(data) ) ;
    }
   else xhr.send();
    console.log(methodType+" request sent to the server at: "+showTime());
}


const getURL="https://my-json-server.typicode.com/DhanshreePatil01/jsondata/employee/1";
function getUserDetails(data){
    console.log("Get User Data at: "+ showTime() + " data: "+ data);
}
makeAJAXCall("GET",getURL,getUserDetails,true);
console.log("Made GET AJAX Call to server at: "+showTime());


const deleteURL = "https://my-json-server.typicode.com/DhanshreePatil01/jsondata/employee/4" ;
function userDeleted(data) {
   console. log ("User Deleted at: "+ showTime() + " data: "+data);
}   
makeAJAXCall("DELETE", deleteURL, userDeleted, false);
console.log("Made GET AJAX Call to server at: "+showTime());


const postURL = "https://my-json-server.typicode.com/DhanshreePatil01/jsondata/employee";
const emplData =  {
    "name": "Diksha Landge",
    "gender": "Female"
  };
function userAdded (data) {
    console. log ("User Added at: "+ showTime() + " data: "+data);
}   
makeAJAXCall("POST", postURL, userAdded, true, emplData);
console.log("Made GET AJAX Call to server at: "+showTime());
