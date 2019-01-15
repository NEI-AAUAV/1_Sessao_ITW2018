function lightSingleSwitch()
{
    // get the HTML element that contains the light
    var lightElem = document.getElementById("light");
    // get the image source
    var imgSrc = lightElem.src;

    //check if the light is on or off
    if( imgSrc.endsWith("light_off.gif"))
    {
        console.log("Light is off! Turning it on...")
        //change the image source
        lightElem.src="img/light_on.gif"
    }
    else if ( imgSrc.endsWith("light_on.gif"))
    {
        console.log("Light is on! Turning it off...")
        //change the image source
        lightElem.src="img/light_off.gif"
    }
}

function turnOn()
{
    // get the HTML element that contains the light
    var lightElem = document.getElementById("light");
    // get the image source
    var imgSrc = lightElem.src;
    //change the image source
    lightElem.src="img/light_on.gif"
}

function turnOff()
{
    // get the HTML element that contains the light
    var lightElem = document.getElementById("light");
    // get the image source
    var imgSrc = lightElem.src;
    //change the image source
    lightElem.src="img/light_off.gif"
}

/**
 * Extra functions!
 */

function turnOnWithAlert()
{
    // get the HTML element that contains the light
    var lightElem = document.getElementById("light");
    // get the image source
    var imgSrc = lightElem.src;
    //change the image source...or not
    if( imgSrc.endsWith("light_on.gif"))
        alert("The light is already on!")
    else
        lightElem.src="img/light_on.gif"
}

function turnOffWithAlert()
{
    // get the HTML element that contains the light
    var lightElem = document.getElementById("light");
    // get the image source
    var imgSrc = lightElem.src;
    //change the image source...or not
    if( imgSrc.endsWith("light_off.gif"))
        alert("The light is already off!")
    else
        lightElem.src="img/light_off.gif"
}