class App
{
    runApplication()
    {
        this.MarioFunction();
        let raw = this.BWAHAHAFunction();
        console.log(raw)
        let result = this.mathFunction(2, 5);
        console.log(result)
        

    }

        MarioFunction()
        {
            console.log("Mario!!!!!")
        }    

        BWAHAHAFunction()
        {
            let raw= ("BWAHAHA")
            
            return raw
        }
        
        mathFunction(getal, getal2)
        {
            let result= getal2 +getal;
        
            return result
        }
    
}

let app = new App();
app.runApplication();