export function Table(item){
const newRow = document.createElement('tr');
const cell1 = document.createElement('td');
cell1.textContent = item.id;

const cell2 = document.createElement('td');
cell2.textContent = item.wallet.toUpperCase()
const cell3 = document.createElement('td');
cell3.textContent = item.category;

const cell4 = document.createElement('td');
cell4.textContent = item.sum;

const cell5 = document.createElement('td');
cell5.textContent = item.createAt;

newRow.appendChild(cell1);
newRow.appendChild(cell2);
newRow.appendChild(cell3);
newRow.appendChild(cell4);
newRow.appendChild(cell5);

return newRow
}
