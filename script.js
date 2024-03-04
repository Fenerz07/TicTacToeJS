var marker = document.querySelectorAll("button");
var a = 0;

function player(i){
    if (marker[i-1].textContent==='o' || marker[i-1].textContent==='x'){
        return;
    }
    else{
        marker[i-1].innerHTML='x';
    }
}

function bot(){
    const randomchoice=Math.floor(Math.random() * 9 + 1);
    if (marker[randomchoice-1].textContent==='x' || marker[randomchoice-1].textContent==='o'){
        bot();
    }
    else{
    marker[randomchoice-1].innerHTML='o';
    }
}

function game(){
    a=0;
    if ( marker[0].textContent==='x' && marker[1].textContent==='x' && marker[2].textContent==='x' || marker[3].textContent==='x' && marker[4].textContent==='x' && marker[5].textContent==='x' || marker[6].textContent==='x' && marker[7].textContent==='x' && marker[8].textContent==='x' || 
    marker[0].textContent==='x' && marker[3].textContent==='x' && marker[6].textContent==='x' || marker[1].textContent==='x' && marker[4].textContent==='x' && marker[7].textContent==='x' || marker[2].textContent==='x' && marker[5].textContent==='x' && marker[8].textContent==='x' ||
    marker[0].textContent==='x' && marker[4].textContent==='x' && marker[8].textContent==='x' || marker[2].textContent==='x' && marker[4].textContent==='x' && marker[6].textContent==='x')
    {
        document.querySelector("p").innerHTML="Player's Victory !"
        for (let i in marker){
            marker[i].innerHTML='&#8205';
        }
    }
    if ( marker[0].textContent==='o' && marker[1].textContent==='o' && marker[2].textContent==='o' || marker[3].textContent==='o' && marker[4].textContent==='o' && marker[5].textContent==='o' || marker[6].textContent==='o' && marker[7].textContent==='o' && marker[8].textContent==='o' || 
    marker[0].textContent==='o' && marker[3].textContent==='o' && marker[6].textContent==='o' || marker[1].textContent==='o' && marker[4].textContent==='o' && marker[7].textContent==='o' || marker[2].textContent==='o' && marker[5].textContent==='o' && marker[8].textContent==='o' ||
    marker[0].textContent==='o' && marker[4].textContent==='o' && marker[8].textContent==='o' || marker[2].textContent==='o' && marker[4].textContent==='o' && marker[6].textContent==='o')
    {
        document.querySelector("p").innerHTML="Bot's Victory !"
        for (let i in marker){
            marker[i].innerHTML='&#8205';
        }
    }
    else{
        for (let i in marker){
            if (marker[i].textContent === 'x' || marker[i].textContent === 'o'){
                a+=1;
            }
        }
    }
}

function main(i){
    document.querySelector("p").innerHTML='';
    player(i);
    game();
    if(a===9){
        document.querySelector("p").innerHTML='Draw !';
        for (let i in marker){
            marker[i].innerHTML='&#8205';
        }
        return;
    }
    if (document.querySelector("p").textContent==="Player's Victory !"){
        return;
    }
    bot();
    if (document.querySelector("p").textContent==="Bot's Victory !"){
        return;
    }
    game();
    if(a===9){
        document.querySelector("p").innerHTML='Draw !';
        for (let i in marker){
            marker[i].innerHTML='&#8205';
        }
        return;
    }
    if (document.querySelector("p").textContent==="Player's Victory !"){
        return;
    }
}