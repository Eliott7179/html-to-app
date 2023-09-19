document.getElementById('title').innerText += ' from JS';
document.getElementById('title').style.color = 'red';

changeTitle();

function changeTitle(){
    const title=document.getElementById("title");
    title.innerText += "from js";
    title.style.color += "red";
}