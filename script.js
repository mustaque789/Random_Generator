let num= document.getElementById("number");
let but=document.getElementById("button");

let func_generate = ()=>{
    let gen = Math.floor(Math.random()*100 + 1);
    num.textContent=gen;
}
but.addEventListener('click', func_generate);

func_generate();