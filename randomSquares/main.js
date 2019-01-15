function shuffle(name) {

    for (i = 0; i < document.getElementsByClassName(name).length; i++) {
        var element = document.getElementsByClassName(name)[i];
        
        var leftStr = element.style.left;
        var topStr = element.style.top;

        //substituir px por vazio ---> '140'
        leftStr.replace("px", "");
        topStr.replace("px", "");

        //converter para float
        left = parseFloat(leftStr);
        top = parseFloat(topStr);        
        
        //saber limites
        var windowHeight = window.innerHeight;
        var windowWidth = window.innerWidth;

        var maxWidthPos = windowWidth - parseFloat(element.style.width.replace("px", ""));
        var maxHeightPos = windowHeight - parseFloat(element.style.height.replace("px", ""));


        var x = 0;
        var y = 0;
        while (x < 40 && y < 70) {
           
            x = Math.floor(Math.random() * maxWidthPos);
            y = Math.floor(Math.random() * maxHeightPos);
            currCord=[x, y];
        }

        element.style.left = x + "px";
        element.style.top = y + "px";
    }
}

function checkMyInfo(elem) 
{
   document.getElementById("color").innerHTML = elem.style.backgroundColor;
   document.getElementById("x").innerHTML = elem.style.left;
   document.getElementById("y").innerHTML = elem.style.top;
}