// app.js
import { addItemToList, displayItems } from './ui.js';
import { saveItem, loadItems } from './storage.js';

const validItems = ['sapato', 'sandália', 'tênis', 'bota', 'chinelo'];

function addItem() {
    const input = document.getElementById('itemInput');
    const itemText = input.value.trim();
    const errorFeedback = document.getElementById('errorFeedback');

// Limpa mensagens anteriores
    errorFeedback.classList.add('hidden');
    input.classList.remove('error');

    if (itemText === '') {
        showError('Por favor, digite um item.');
        return;
    } else if (!validItems.includes(itemText.toLowerCase())) {
        showError('Por favor, digite um calçado válido.');
        return;
    } else if (loadItems().includes(itemText.toLowerCase())) {
        showError('Este item já existe na lista.');
        return;
    }

    addItemToList(itemText);
    saveItem(itemText);

    input.value = '';
}

function showError(message) {
    const errorFeedback = document.getElementById('errorFeedback');
    errorFeedback.textContent = message;
    errorFeedback.classList.remove('hidden');
    document.getElementById('itemInput').classList.add('error');
}

document.addEventListener('DOMContentLoaded', displayItems);

document.getElementById('adc').addEventListener('click', addItem);