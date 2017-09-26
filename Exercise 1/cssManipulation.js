
function myChoice()
{
    var x = document.getElementById("Border").value;
    var y = document.getElementById("Color").value;
    console.log(x);
    console.log(y);
    
    if(x=="red")
    {
        document.getElementById("para").style.border = "thick solid red";
    }
        else if(x=="green")
        {
            document.getElementById("para").style.border = "thick solid green";
        }
        else if(x=="blue")
        {
            document.getElementById("para").style.border = "thick solid blue";
        }
        else
        {
            alert("Invaild input, pleas try again!")
        }
    
        if(y=="red")
        {
            document.getElementById("para").style.backgroundColor = "#FF0000";
        }
        else if (y=="green")
        {
            document.getElementById("para").style.backgroundColor = "#556B2F";
        }
        else if (y=="blue")
        {
            document.getElementById("para").style.backgroundColor = "#0000FF";
        }
        else
        {
            alert("Invaild input, pleas try again!")
        }
}




    