const gridContainer = document.querySelector('.grid-container');
const addBtn = document.querySelector('.add-section');

// Añadir nueva categoría
addBtn.addEventListener('click', () => {
  const name = prompt('Nombre de la nueva sección:');
  if (!name) return;

  const newItem = document.createElement('div');
  newItem.classList.add('grid-item');
  newItem.textContent = name;

  gridContainer.insertBefore(newItem, addBtn);
});

// Toggle expansión Alcohol
const alcoholItem = document.getElementById('alcohol');
const alcoholCollapseBtn = document.getElementById('collapse-alcohol');
const alcoholInnerGrid = document.getElementById('alcohol-inner-grid');

alcoholCollapseBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  alcoholItem.classList.toggle('expanded');

  const expanded = alcoholItem.classList.contains('expanded');
  alcoholInnerGrid.style.display = expanded ? 'grid' : 'none';
  alcoholCollapseBtn.textContent = expanded ? '˄' : '˅';
});

// Agregar gadgets internos
alcoholInnerGrid.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-gadget')) {
    const name = prompt('Nombre del gadget:');
    if (!name) return;

    const gadget = document.createElement('div');
    gadget.classList.add('inner-grid-item');
    gadget.textContent = name;

    alcoholInnerGrid.insertBefore(gadget, e.target);
  }
});