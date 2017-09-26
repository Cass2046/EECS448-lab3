
function myChoice()
{
    var x = document.getElementById("Border").value;
    var y = document.getElementById("Color").value;
    console.log(x);
    console.log(y);
    
    if(x=="red")
    {
        document.getElementById("para").style.borderColor = "#FF1E1E";
        console.log(x);
    }
        else if(x=="green")
        {
            document.getElementById("para").style.borderColor = "#00AF00";
            console.log(x);
        }
        else if(x=="blue")
        {
            document.getElementById("para").style.borderColor = "#0A0AFF";
            console.log(x);
        }
        else if(x=="thick")
        {
            document.getElementById("para").style.borderWidth = "thick";
            console.log(x);
        }
        else if(x=="thin")
        {
            document.getElementById("para").style.borderWidth = "thin";
            console.log(x);
        }
        else if(x=="medium")
        {
            document.getElementById("para").style.borderWidth = "medium";
            console.log(x);
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




    