let gridButton = document.getElementById('grid-button');
let gridSize = 0;

gridButton.addEventListener('click', () => {
    gridSize = prompt("Enter your desired grid size.");
    while (gridSize > 100 || gridSize < 16){
        if (gridSize > 100) 
            gridSize = prompt("Max is 100x100");
        if (gridSize < 16)
            gridSize = prompt("Min is 16x16");
    }
    createGrid(gridSize);
    start();
})

function start(){
    // hover ('mouseover') event listener for each square
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('mouseover', (event) => {
            // gets rgba of current square
            let squareCS = window.getComputedStyle(square);
            let rgba = squareCS.backgroundColor.replace(/[^\d,.]/g, '').split(',');
            // darken square by 25% unless its already black
            if (rgba[rgba.length-1] == 1){
                rgba = rgba.join();
            } else {
                rgba[rgba.length-1] = +rgba[rgba.length-1] + 0.25;
                rgba = rgba.join();
            }
            square.setAttribute('style', `background-color: rgba(${rgba}); max-width: ${960 / gridSize}px; height: ${960 / gridSize}px;`);
        })
    });
}

let gridContainer = document.querySelector('#grid-container');
function createGrid(gridSize){
    while(gridContainer.hasChildNodes()){
        gridContainer.removeChild(gridContainer.firstElementChild);
    }
    // create grid
    for (let row = 0; row < gridSize; row++){
        //create row div
        let rowDiv = document.createElement('div');
        rowDiv.classList.toggle('row');
        for (let col = 0; col < gridSize; col++){
            let newDiv = document.createElement('div');
            newDiv.classList.toggle('square');
            newDiv.setAttribute('style', `max-width: ${960 / gridSize}px; height: ${960 / gridSize}px;`);
            rowDiv.appendChild(newDiv);
        }
        // firstElementChild to return full element child (firstChild returns comment node)
        gridContainer.insertBefore(rowDiv, gridContainer.firstElementChild);
    }
}