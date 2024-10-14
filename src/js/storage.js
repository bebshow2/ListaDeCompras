// storage.js
export function saveItem(item) {
    const items = getItems();
    items.push(item);
    localStorage.setItem('shoppingList', JSON.stringify(items));
}

export function getItems() {
    const items = localStorage.getItem('shoppingList');
    return items ? JSON.parse(items) : [];
}

export function loadItems() {
    return getItems();
}
