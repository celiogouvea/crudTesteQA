let items = [];
let editIndex = -1;  // Variable to track which item is being edited

function addItem() {
  const itemName = document.getElementById('itemName').value;
  if (itemName === '') {
    alert('Please enter an item name');
    return;
  }

  if (editIndex === -1) {
    // Adding a new item
    items.push(itemName);
  } else {
    // Editing an existing item
    items[editIndex] = itemName;
    editIndex = -1;  // Reset the edit index
  }

  document.getElementById('itemName').value = '';  // Clear the input field
  renderItems();
  resetButton();  // Reset the button back to 'Add Item'
}

function deleteItem(index) {
  items.splice(index, 1);
  renderItems();
}

function editItem(index) {
  // Set the input field with the item value
  document.getElementById('itemName').value = items[index];
  
  // Change the button text to "Save"
  const addButton = document.getElementById('insertItem');
  addButton.textContent = 'Save';
  
  // Store the index of the item being edited
  editIndex = index;
}

function resetButton() {
  const addButton = document.getElementById('insertItem');
  addButton.textContent = 'Add Item';  // Reset button to 'Add Item'
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
