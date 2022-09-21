
let button = document.getElementsByTagName('button');
let body  = document.body;
let code = document.getElementById('code');
button[0].addEventListener('click',function(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue= Math.floor(Math.random()*256);
    const color = `rgb(${red},${green},${blue})`;
    code.textContent = color;
    body.style.backgroundColor = color;
})
button[1].addEventListener('click',()=>{
    let copyCode = code.textContent;
    navigator.clipboard.writeText(copyCode)
    .then(() => { alert("Code Copied"); });
})