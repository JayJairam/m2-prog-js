class App
{
    runApplication()
    {
        console.log("hello world");
        let appnaam = "Bankieren"; 
        let versienummer = 1.0
        let versiedatum = new Date ("2022-11-22");
        let autheur = "Jainarain";
        let copyright = "CC";
        let distributeur = "Jainarain";
        let darkmode = true

        console.log(appnaam)
        console.log(versienummer)
        console.log(versiedatum)
        console.log(autheur)
        console.log(copyright)
        console.log(distributeur)
        console.log(darkmode)

    }
}

let app = new App();
app.runApplication();