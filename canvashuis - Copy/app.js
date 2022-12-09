class App
{
    runApplication()
    {
        let canvasvariable=document.getElementById("canvasId")
        console.log(canvasvariable)

        let g = canvasvariable.getContext("2d");
        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(200,300)
        g.lineTo(200,500)
        g.lineTo(600,600)
        g.lineTo(600,400)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(600,400)
        g.lineTo(600,600)
        g.lineTo(800,500)
        g.lineTo(800,300)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(700,200)
        g.lineTo(600,400)
        g.lineTo(800,300)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "black"
        g.moveTo(200,350)
        g.lineTo(200,450)
        g.lineTo(600,300)
        g.lineTo(300,300)
        g.closePath()
        g.stroke()
        g.fill()

        let randomGetal = Math.random();

        if (randomGetal == 0 )
        {
            g.fillStyle == "red";
        }
        if (randomGetal >= 0.2)
        {console.log}
        if (randomGetal >= 0.6)
        {console.log}


       
    }
}

let app = new App();
app.runApplication();
