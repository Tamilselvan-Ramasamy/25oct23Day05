var url = "http://127.0.0.1:5500/tamil.json"
const req = new  XMLHttpRequest();


req.addEventListener("load",function()
{ const obj = JSON.parse(this.response)
    for (let basics of obj)
    {
        console.log(basics)
       }
});
req.open("GET",URL);
req.send() 