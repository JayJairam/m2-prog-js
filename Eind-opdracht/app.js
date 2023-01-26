class App {
    runapplication() {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");


        //border//

        g.beginPath()
        g.fillStyle = "#5671fd";
        g.moveTo(10, 10)
        g.lineTo(1210, 10)
        g.lineTo(1210, 710)
        g.lineTo(10, 710)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "#c5f750";
        g.moveTo(60, 60)
        g.lineTo(1160, 60)
        g.lineTo(1160, 660)
        g.lineTo(60, 660)
        g.closePath();
        g.stroke();
        g.fill();

        //border//


        //boom//
        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(190,550)
        g.lineTo(190,625)
        g.lineTo(170,625)
        g.lineTo(170,550)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "green"
        g.arc(180, 550, 40, 0, 2 * Math.PI)
        g.closePath()
        g.stroke()
        g.fill()
        g.beginPath()

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(530,550)
        g.lineTo(530,625)
        g.lineTo(510,625)
        g.lineTo(510,550)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "green"
        g.arc(520, 550, 40, 0, 2 * Math.PI)
        g.closePath()
        g.stroke()
        g.fill()
        g.beginPath()

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(690,550)
        g.lineTo(690,625)
        g.lineTo(670,625)
        g.lineTo(670,550)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "green"
        g.arc(680, 550, 40, 0, 2 * Math.PI)
        g.closePath()
        g.stroke()
        g.fill()
        g.beginPath()

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(320,550)
        g.lineTo(320,625)
        g.lineTo(290,625)
        g.lineTo(290,550)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "green"
        g.arc(305, 550, 40, 0, 2 * Math.PI)
        g.closePath()
        g.stroke()
        g.fill()
        g.beginPath()



        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(320,275)
        g.lineTo(320,350)
        g.lineTo(290,350)
        g.lineTo(290,275)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "green"
        g.arc(305, 275, 40, 0, 2 * Math.PI)
        g.closePath()
        g.stroke()
        g.fill()
        g.beginPath()

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(190,275)
        g.lineTo(190,350)
        g.lineTo(170,350)
        g.lineTo(170,275)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "green"
        g.arc(180, 275, 40, 0, 2 * Math.PI)
        g.closePath()
        g.stroke()
        g.fill()
        g.beginPath()

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(530,275)
        g.lineTo(530,350)
        g.lineTo(510,350)
        g.lineTo(510,275)
        g.closePath()
        g.stroke()
        g.fill()
        
        g.beginPath()
        g.fillStyle = "green"
        g.arc(520, 275, 40, 0, 2 * Math.PI)
        g.closePath()
        g.stroke()
        g.fill()
        g.beginPath()


        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(690,275)
        g.lineTo(690,350)
        g.lineTo(670,350)
        g.lineTo(670,275)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "green"
        g.arc(680, 275, 40, 0, 2 * Math.PI)
        g.closePath()
        g.stroke()
        g.fill()
        g.beginPath()

        //boom//

        


        //hous//
        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(100, 100)
        g.lineTo(100, 150)
        g.lineTo(150, 150)
        g.lineTo(150, 100)
        g.lineTo(125, 75)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "blue";
        g.moveTo(200, 100)
        g.lineTo(200, 150)
        g.lineTo(250, 150)
        g.lineTo(250, 100)
        g.lineTo(225, 75)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "green";
        g.moveTo(300, 100)
        g.lineTo(300, 150)
        g.lineTo(350, 150)
        g.lineTo(350, 100)
        g.lineTo(325, 75)
        g.closePath()
        g.stroke()
        g.fill()


        g.beginPath()
        g.fillStyle = "aqua";
        g.moveTo(400, 100)
        g.lineTo(400, 150)
        g.lineTo(450, 150)
        g.lineTo(450, 100)
        g.lineTo(425, 75)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "green";
        g.moveTo(500, 100)
        g.lineTo(500, 150)
        g.lineTo(550, 150)
        g.lineTo(550, 100)
        g.lineTo(525, 75)
        g.closePath()
        g.stroke()
        g.fill()


        g.beginPath()
        g.fillStyle = "blue";
        g.moveTo(600, 100)
        g.lineTo(600, 150)
        g.lineTo(650, 150)
        g.lineTo(650, 100)
        g.lineTo(625, 75)
        g.closePath()
        g.stroke()
        g.fill()


        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(700, 100)
        g.lineTo(700, 150)
        g.lineTo(750, 150)
        g.lineTo(750, 100)
        g.lineTo(725, 75)
        g.closePath()
        g.stroke()
        g.fill()
        //house//

        //house2//

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(100, 400)
        g.lineTo(100, 450)
        g.lineTo(150, 450)
        g.lineTo(150, 400)
        g.lineTo(125, 375)
        g.closePath()
        g.stroke()
        g.fill()


        g.beginPath()
        g.fillStyle = "beige";
        g.moveTo(200, 400)
        g.lineTo(200, 450)
        g.lineTo(250, 450)
        g.lineTo(250, 400)
        g.lineTo(225, 375)
        g.closePath()
        g.stroke()
        g.fill()


        g.beginPath()
        g.fillStyle = "pink";
        g.moveTo(300, 400)
        g.lineTo(300, 450)
        g.lineTo(350, 450)
        g.lineTo(350, 400)
        g.lineTo(325, 375)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "violet";
        g.moveTo(400, 400)
        g.lineTo(400, 450)
        g.lineTo(450, 450)
        g.lineTo(450, 400)
        g.lineTo(425, 375)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "beige";
        g.moveTo(500, 400)
        g.lineTo(500, 450)
        g.lineTo(550, 450)
        g.lineTo(550, 400)
        g.lineTo(525, 375)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "pink";
        g.moveTo(600, 400)
        g.lineTo(600, 450)
        g.lineTo(650, 450)
        g.lineTo(650, 400)
        g.lineTo(625, 375)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(700, 400)
        g.lineTo(700, 450)
        g.lineTo(750, 450)
        g.lineTo(750, 400)
        g.lineTo(725, 375)
        g.closePath()
        g.stroke()
        g.fill()
        //house2//

        //road1//
        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(100, 450)
        g.lineTo(100, 500)
        g.lineTo(750, 500)
        g.lineTo(750, 450)
        g.closePath()
        g.stroke()
        g.fill()
        //road1//

        //road2//
        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(100, 150)
        g.lineTo(100, 200)
        g.lineTo(750, 200)
        g.lineTo(750, 150)
        g.closePath()
        g.stroke()
        g.fill()
        //road2//



    }


}

let app = new App();
app.runapplication()