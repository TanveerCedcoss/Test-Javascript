var fname, mobile;
function fetchData(){
    document.getElementById("na").innerHTML=" ";
    document.getElementById("name").style="border:1px solid black" ;
    document.getElementById("nb").innerHTML=" ";
    document.getElementById("mobile").style="border:1px solid black" ;

    fname = document.getElementById("name").value;
    mobile= document.getElementById("mobile").value;
    console.log(mobile.length);
    checkFields();

}



function checkFields()
{
    if(fname=='')
    {
        document.getElementById("na").innerHTML="This is empty!!!";
        document.getElementById("name").style="border:1px solid red" ;
    }
     if(Number.isInteger(parseInt(fname)))
     {
        document.getElementById("na").innerHTML="Incorrect Entry!!!";
        document.getElementById("name").style="border:1px solid red" ;
     }
        
    
    if(mobile=='')
    {
        document.getElementById("nb").innerHTML="This is empty!!!";
        document.getElementById("mobile").style="border:1px solid red" ;
    }
    if(mobile.length<10 || mobile.length>10)
    {
        document.getElementById("nb").innerHTML="Enter correct mobile number (It should have 10 digits)!!!";
        document.getElementById("mobile").style="border:1px solid red" ;       
    }
    if(isNaN(mobile))
    {
        document.getElementById("nb").innerHTML="Incorrect entry!!!";
        document.getElementById("mobile").style="border:1px solid red" ;

    }
}

