var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");
var resultField = document.getElementById("resultField");
var form = document.getElementById('xIsWhatPercentOfY');

function Calculator(x,y)
{
    this.x = x;
    this.y = y;
    this.res = x/100 * y;
}


var calculator;

function res(x, y)
{
    return x/100 * y;
}

form.addEventListener('submit',function(event) {
    //alert("We clickeyclacked something!");
    if(!numField1.value || !numField2.value)
    {
        alert("Please Enter values in Field");
    }
    else
    {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);        
        var result = new Calculator(x,y);
        resultField.innerText = "Answer: " + result.res + "";
        event.preventDefault();
    }
});



