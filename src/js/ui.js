// ui.js
import { saveItem, loadItems } from './storage.js';

export function addItemToList(itemText) {
    const li = document.createElement('li');
    li.textContent = itemText;
    li.classList.add('visible');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.onclick = function() {
        li.remove();
        removeItem(itemText);
    };

    li.appendChild(deleteButton);
    document.getElementById('itemList').appendChild(li);
}

export function displayItems() {
    const items = loadItems();
    items.forEach(item => addItemToList(item));
}

function removeItem(itemText) {
    const items = loadItems();
    const updatedItems = items.filter(item => item !== itemText);
    localStorage.setItem('shoppingList', JSON.stringify(updatedItems));
}
