var index=0;
function pic()
{
    if(index==0)
    {
        document.image.src="1.jpg"
    }
    else if(index==1)
    {
        document.image.src="2.jpg"
    }
    else if(index==2)
    {
        document.image.src="3.jpg"
    }
    else if(index==3)
    {
        document.image.src="4.jpg"
    }
    else
    {
        document.image.src="5.jpg"
    }


    // var images = new Array()
    // image[0] = document.images[0].src
    // image[1] = document.images[1].src
    // image[2] = document.images[2].src
    // image[3] = document.images[3].src
    // image[4] = document.images[4].src
    // var currentimgage = imgage[0]
}

function prev()
{
    if (index<=0)
    {
        index=4;
    }
    else
    {
        index--;
    }
    console.log(index);
    pic();
}

function next()
{
    if(index>=4)
    {
        index=0;
    }
    else
    {
        index++;
    }
    console.log(index);
    pic();
}
