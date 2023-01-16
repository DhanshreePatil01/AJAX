function subtraction(val1,val2,callback)
{
    let result=val1-val2;
    callback(result)
}

subtraction(25,10,function(subt){
    console.log("Subtraction is: "+subt);
})

function square(val,callback)
{
    let output=val*val;
    callback(output)
}

square(7,function(Multiply){
    console.log("Square is: "+Multiply);
})