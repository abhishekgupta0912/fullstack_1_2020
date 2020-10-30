function displaycount1(){
    var subtract=document.getElementById("counting").innerHTML;
    if (subtract>1)
    {            subtract--;

        document.getElementById("counting").innerHTML=subtract;
    }
    else 
    {
        btn1.setAttribute('disabled',false);
        document.getElementById("counting").innerHTML=0;
    }
}
function displaycount2(){
    var addition=document.getElementById("counting").innerHTML;
    addition++;
    btn1.removeAttribute('disabled');

    document.getElementById("counting").innerHTML=addition;
}