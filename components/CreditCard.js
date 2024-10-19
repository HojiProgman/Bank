export function Card(item){
const cardDiv = document.createElement('div');
cardDiv.className = 'card';

const typeCard = document.createElement('p');
typeCard.className = 'typeCard';
typeCard.textContent = `${item.name}`.slice(0,1).toUpperCase() + `${item.name}`.slice(1);

const currency = document.createElement('p');
currency.className = 'currency';
currency.textContent = `${item.currency}`.toUpperCase();

cardDiv.appendChild(typeCard);
cardDiv.appendChild(currency);

 return cardDiv
}