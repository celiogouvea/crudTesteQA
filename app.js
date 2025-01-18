let items = [];

function addItem() {
  const itemName = document.getElementById('itemName').value;
  if (itemName === '') {
    alert('Please enter an item name');
    return;
  }

  items.push(itemName);
  document.getElementById('itemName').value = '';
  renderItems();
}

function deleteItem(index) {
  items.splice(index, 1);
  renderItems();
}

function editItem(index) {
  const newItemName = prompt('Edit item:', items[index]);
  if (newItemName !== null && newItemName.trim() !== '') {
    items[index] = newItemName;
    renderItems();
  }
}

function renderItems() {
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = '';

  items.forEach((item, index) => {
    const row = document.createElement('tr');
    const cellItem = document.createElement('td');
    const cellActions = document.createElement('td');

    cellItem.textContent = item;
    
    // Button to delete the item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteItem(index);
    cellActions.appendChild(deleteButton);
    
    // Button to edit the item
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => editItem(index);
    cellActions.appendChild(editButton);

    row.appendChild(cellItem);
    row.appendChild(cellActions);
    itemList.appendChild(row);
  });
}
