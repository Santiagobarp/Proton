// ==============================
// NAV: Activar ítem seleccionado
// ==============================
const navItems = document.querySelectorAll('.view__nav-item');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});


// ==============================
// SECCIÓN: Agregar nueva categoría con modal
// ==============================
const gridContainer = document.querySelector('.grid-container');
const addSectionBtn = document.querySelector('.add-section');

const modal = document.getElementById('sectionModal');
const input = document.getElementById('sectionName');
const cancelBtn = document.getElementById('cancelBtn');
const confirmBtn = document.getElementById('confirmBtn');

// Mostrar modal
addSectionBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  input.value = '';
  input.focus();
});

// Cancelar
cancelBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Confirmar y crear sección con estructura completa
confirmBtn.addEventListener('click', () => {
  const name = input.value.trim();
  if (!name) return;

  // Crear contenedor
  const newItem = document.createElement('div');
  newItem.classList.add('grid-item');

  // Botón de colapsar
  const collapseBtn = document.createElement('button');
  collapseBtn.classList.add('collapse-btn');
  collapseBtn.textContent = '˅';

  // Título
  const title = document.createElement('h3');
  title.classList.add('grid-title');
  title.textContent = name;

  // Contenedor interno
  const innerGrid = document.createElement('div');
  innerGrid.classList.add('inner-grid');

  // Botón para agregar gadgets
  const addGadget = document.createElement('div');
  addGadget.classList.add('inner-grid-item', 'add-gadget');
  addGadget.textContent = '+';

  innerGrid.appendChild(addGadget);

  // Ensamblar todo
  newItem.appendChild(collapseBtn);
  newItem.appendChild(title);
  newItem.appendChild(innerGrid);
  gridContainer.insertBefore(newItem, addSectionBtn);

  modal.style.display = 'none';

  // Expandir/colapsar sección nueva
  collapseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const expanded = newItem.classList.toggle('expanded');
    collapseBtn.textContent = expanded ? '˄' : '˅';
    if (expanded) {
      setTimeout(() => {
        newItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 900);
    }
  });

  // Agregar gadgets internos
  innerGrid.addEventListener('click', (e) => {
    if (!e.target.classList.contains('add-gadget')) return;

    const gadgetName = prompt('Nombre del gadget:');
    if (!gadgetName) return;

    const gadget = document.createElement('div');
    gadget.classList.add('inner-grid-item');
    gadget.textContent = gadgetName;

    innerGrid.insertBefore(gadget, addGadget);
  });
});


// ==============================
// SECCIÓN: Expansión de categoría "alcohol"
// ==============================
const alcoholItem = document.getElementById('alcohol');
const alcoholCollapseBtn = document.getElementById('collapse-alcohol');
const alcoholInnerGrid = document.getElementById('alcohol-inner-grid');

alcoholCollapseBtn.addEventListener('click', (e) => {
  e.stopPropagation();

  const expanded = alcoholItem.classList.toggle('expanded');
  alcoholCollapseBtn.textContent = expanded ? '˄' : '˅';

  if (expanded) {
    setTimeout(() => {
      alcoholItem.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 900);
  }
});


// ==============================
// GADGETS: Agregar gadget interno a sección "alcohol"
// ==============================
alcoholInnerGrid.addEventListener('click', (e) => {
  if (!e.target.classList.contains('add-gadget')) return;

  const name = prompt('Nombre del gadget:');
  if (!name) return;

  const gadget = document.createElement('div');
  gadget.classList.add('inner-grid-item');
  gadget.textContent = name;

  alcoholInnerGrid.insertBefore(gadget, e.target);
});