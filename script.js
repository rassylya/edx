function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value; 
    var amount = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if(principal<=0)
    {
    	alert("Please enter positive value into principal");
    }
    else
    {
    document.getElementById("result").innerHTML = "If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of \<mark\>"+amount+",\</mark\>\<br\>in the year "+year+"\<br\>"
    }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
