const title = document.createElement('h2'); // creating the header
title.innerText = '- JS ChessBoard -'
document.body.appendChild(title);
title.classList.add('heading');

const chessTable = document.createElement('table'); // creating the table
document.body.append(chessTable);
chessTable.classList.add('chess_table');

for (let i = 0; i<8; i++) {                 // creating and looping the rows
    let row = document.createElement('tr'); 
    chessTable.append(row);
    row.classList.add('row');

    for(let c = 0; c<8; c++) {              // creating and looping the cells
        const cell = document.createElement('td');
        row.append(cell);

        if((c + i) % 2 == 0) {              // setting the classes
            cell.classList.add('white_cell');

        } else {
            cell.classList.add('black_cell');
        }
    }
    
}

