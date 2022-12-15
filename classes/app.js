class dino
{

    constructor(naam,vleeseter,leeftijd,)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
    }
}

class plant
{

    constructor(naam){
        this.naam = naam;
        
    }
}


class App
{
    runApplication()
    {
        let trex = new dino("Trex",true,10);
        let ankilo = new dino ("ankilo",false,125)
        let giga = new dino ("giga",true,43)
        console.log(trex)
        console.log(ankilo)
        console.log(giga)
    }
}

let app = new App();
app.runApplication();