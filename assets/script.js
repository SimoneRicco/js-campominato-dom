const easyCells = 100;
const mediumCells = 81;
const hardCells = 49;
document.querySelector("#play").addEventListener("click", function () {
    const gamemode = document.querySelector("#difficulty").value;
    switch (gamemode) {
        case 'easy':
            generateCells(easyCells, gamemode);
            break;
        case 'medium':
            generateCells(mediumCells, gamemode);
            break;
        case 'hard':
            generateCells(hardCells, gamemode);
            break;
    }
    const listCells = document.querySelectorAll('.element');
    for (let i = 0; i < listCells.length; i++) {
        const cell = listCells[i];
        cell.addEventListener('click',
            function colorCell() {
                console.log("Number " + (i + 1) );
                this.classList.toggle('clicked');
            }
        );
    }
});

function generateCells(nCells, gm) {
    let grid = document.querySelector(".grid");
    grid.innerHTML = "";
    for (let i = 1; i < nCells + 1; i++) {
        grid.innerHTML += `<div class="element ${gm}">${i}</div>`;
    }
}