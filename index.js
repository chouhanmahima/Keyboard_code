
let showName = document.querySelector("#show-name");
let codeContainer = document.querySelector(".container");
let keyNo = document.querySelector("#key-no");

document.addEventListener("keydown",(e) => {
    console.log(e);
    let audio = new Audio('./COMType_Typewriter key (ID 2842)_BSB.mp3');
    audio.play();
    showName.innerHTML = "You have pressed <span id='key-name'></span>"
    let keyName = document.querySelector("#key-name");
    if(e.ctrlKey && e.key != "Control"){
        keyName.innerText = `ctrl + ${e.key}`;
    } else if (e.altKey && e.key != "Alt"){
        keyName.innerText = `alt + ${e.key}`;
    }else{
        keyName.innerText = e.key;
    }
    keyNo.classList.add("key-no")
    keyNo.innerText = e.keyCode;
})