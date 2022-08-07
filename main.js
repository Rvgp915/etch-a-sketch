const grid = document.getElementById('container');

function sketch(Size) {
    container.style.setProperty('grid-template-columns', `repeat(${Size}, ${(1 / Size) * 625}px)`);
    container.style.setProperty('grid-template-rows', `repeat(${Size}, ${(1 / Size) * 575}px)`);

    for (let i = 0; i < Size * Size; i++) {
        const child = document.createElement('div');
        child.style.border = "1px solid green";
        grid.appendChild(child);
        child.addEventListener('mouseover', () => {
            if (document.querySelector('select').value === "black") {
                child.style.backgroundColor = "black";
            }
        })
    }
}
sketch(25);

document.getElementById('reset').addEventListener('click', resetSize);

function resetSize() {
    container.innerHTML = "";

    let newSize = prompt("Enter new grid size from 1 - 100:");
    if (newSize >= 1 && newSize <= 100) {
        sketch(newSize);
    } else {
        resetSize();
    }
}
