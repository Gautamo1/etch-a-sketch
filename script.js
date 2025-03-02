const style = document.createElement('style');
style.textContent = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
document.head.appendChild(style);


const container = document.createElement('div');
container.id = 'grid';

document.body.appendChild(container);

container.style.width = '960px';
container.style.height = '960px';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.boxSizing = 'border-box';

const gridSize = 16;
const squareSize = 960 / gridSize;

for(let i = 0; i<gridSize*gridSize;i++){
    const square = document.createElement('div');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.boxSizing = 'border-box'; 

    square.addEventListener('mouseover', () =>{
        square.style.backgroundColor = 'black';
    });

    container.appendChild(square);
}