class App
{
    runApplication()
    {
        console.log("helo world")
    }
}

let app = new App();
app.runApplication();

let arr = ["Micheal, Elvis, Andre, Slash, Bob,"]

let headers = document.getElementsByClassName("Bandname")
for(let i = 0; i< headers.length; i++){
    headers[i].innnerHTML = arr[i];
}

console.log(arr)
