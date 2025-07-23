const gridContainer = document.querySelector('.grid-container');
const addSectionBtn = document.querySelector('.add-section');

const modalOverlay = document.getElementById('modal-overlay');
const inputName = document.getElementById('habit-name');
const inputDesc = document.getElementById('habit-desc');
const confirmBtn = document.querySelector('.modal__submit');
const closeBtn = document.querySelector('.modal__close');

function createSection(name, isInitial = false) {
  const newItem = document.createElement('div');
  newItem.classList.add('grid-item');

  const collapseBtn = document.createElement('button');
  collapseBtn.classList.add('collapse-btn');
  collapseBtn.textContent = '˅';

  const title = document.createElement('h3');
  title.classList.add('grid-title');
  title.textContent = name;

  const innerGrid = document.createElement('div');
  innerGrid.classList.add('inner-grid');

  const addGadget = document.createElement('div');
  addGadget.classList.add('inner-grid-item', 'add-gadget');
  addGadget.textContent = '+';

  innerGrid.appendChild(addGadget);
  newItem.appendChild(collapseBtn);
  newItem.appendChild(title);
  newItem.appendChild(innerGrid);

  if (!isInitial) {
    gridContainer.insertBefore(newItem, addSectionBtn);
  } else {
    const initial = document.getElementById('alcohol');
    initial.replaceWith(newItem);
  }

  // Collapse/Expand
  collapseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const expanded = newItem.classList.toggle('expanded');
    collapseBtn.textContent = expanded ? '˄' : '˅';
    if (expanded) {
      setTimeout(() => {
        newItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 1000);
    }
  });

  // Add gadgets
  innerGrid.addEventListener('click', (e) => {
    if (!e.target.classList.contains('add-gadget')) return;
    const gadgetName = prompt('Nombre del gadget:');
    if (!gadgetName) return;

    const gadget = document.createElement('div');
    gadget.classList.add('inner-grid-item');
    gadget.textContent = gadgetName;

    innerGrid.insertBefore(gadget, addGadget);
  });
}

// Iniciar con sección base funcional
window.addEventListener('DOMContentLoaded', () => {
  createSection('Despertarse temprano', true);
});

// Modal
addSectionBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('hidden');
  inputName.value = '';
  inputDesc.value = '';
  inputName.focus();
});

closeBtn.addEventListener('click', () => {
  modalOverlay.classList.add('hidden');
});

confirmBtn.addEventListener('click', () => {
  const name = inputName.value.trim();
  if (!name) return;
  createSection(name);
  modalOverlay.classList.add('hidden');
});