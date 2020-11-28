const container = document.querySelector(".container");

function colorMode(){
    let mode = document.querySelector('select').value;
    let color;
    if(mode == "black"){
        color = "black";
    }else if (mode == "rainbow"){
        color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }else{
        color = `rgba(0,0,0,${increment()})`;
    }return color;
}


let op = "";
function increment(){
    if(op== "") op = 0.1;
    else if(op >= 0.1 && op <0.9) op = op + 0.1;
    else op = 0.1;
    return Number.parseFloat(op).toFixed(1);
}


let gridSize = 16;
function createGrid(gridSize){
    container.setAttribute('style', `grid-template-columns: repeat(${gridSize},1fr)`, `grid-template-rows: repeat(${gridSize},1fr)`);
    for (let i = 0; i < (gridSize * gridSize); i++) {
        let square = document.createElement("div");
        square.setAttribute('style', 'border: 1px solid #999', 'background: white');
        container.appendChild(square);
        square.addEventListener("mouseenter", () => { 
            square.setAttribute('style', `background:${colorMode()}`);           
        });      
    }   
}
createGrid(gridSize);


function clearGrid() {
    container.innerHTML = "";   
}


function resetGrid () {
    clearGrid();
    let newSize = prompt("enter a number between 1 and 64");
    if(newSize < 1 || newSize > 64){
        alert("Your number is not valid");
        resetGrid();
    }else{
        newSize = parseInt(newSize);
        createGrid(newSize); 
    }
}


const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", resetGrid);

    



