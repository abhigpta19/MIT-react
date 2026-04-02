function fn()
{
    alert("this is js");
}

function getData(){
        
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(res => res.json())
            .then(data => {
            document.getElementById("message").innerText = data.title
            });
        console.log("fetching data");
        document.getElementById("message").innerText = "Loading........";

}

function changetext()
{
    document.body.children[0].innerText = "this is changed text";
}