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
})

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
            rowDiv.appendChild(newDiv);
        }
        // firstElementChild to return full element child (firstChild returns comment node)
        gridContainer.insertBefore(rowDiv, gridContainer.firstElementChild);
    }
}


