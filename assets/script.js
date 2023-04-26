const easyCells = 100;
const mediumCells = 81;
const hardCells = 49;
const nBombs = 16;
let bombList = [];
let currentModeCells = 0;
let points = 0;
const pointArea = document.querySelector(".score");
document.querySelector("#play").addEventListener("click", function () {
    reset();
    const gamemode = document.querySelector("#difficulty").value;
    switch (gamemode) {
        case 'easy':
            currentModeCells = easyCells;
            break;
        case 'medium':
            currentModeCells = mediumCells;
            break;
        case 'hard':
            currentModeCells = hardCells;
            break;
    }
    generateCells(currentModeCells, gamemode); //generate cells
    generateBombs(nBombs, bombList, currentModeCells); //generate bomb position
    const listCells = document.querySelectorAll('.element');
    for (let i = 0; i < listCells.length; i++) {
        const cell = listCells[i];
        cell.addEventListener('click',
            function colorCell() {
                console.log("Number " + (i + 1));
                if (bombList.includes(i)) {
                    this.classList.add('bomb');
                    endGame(listCells, bombList, points);
                } else {
                    this.classList.add('clicked');
                    points++;
                    if (currentModeCells - nBombs == points) {
                        endGame(listCells, bombList, points);
                    }
                }
            }
        );
    }
});

function reset() {
    pointArea.innerHTML = ""
    points = 0;
    bombList = [];
}

function endGame(cellList, bombList) {
    for (let i = 0; i < cellList.length; i++) {
        if (bombList.includes(i)) {
            cellList[i].classList.add("bomb"); //rivela le bombe
        }
    }
    if (currentModeCells - nBombs == points) {
        pointArea.innerHTML = "Hai vinto";
    }else{
        pointArea.innerHTML = `Hai fatto un punteggio di: ${points}`;//segna il punteggio
    }
}

function generateCells(nCells, gm) {
    let grid = document.querySelector(".grid");
    grid.innerHTML = "";
    for (let i = 1; i < nCells + 1; i++) {
        grid.innerHTML += `<div class="element ${gm}">${i}</div>`;
    }
}

function generateBombs(bombs, list, gm) {
    let num = 0;
    // debugger;
    for (let i = 0; i < bombs; i++) {
        do {
            num = Math.floor(Math.random() * gm);
        } while (list.includes(num))
        list.push(num);
    }
}