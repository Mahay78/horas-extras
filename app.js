/* Control de Horas Extras - app.js */
'use strict';

const INITIAL_UNITS = [
  { unit: "UNIDAD SVB 1310 ARRECIFE - 24H/DIA DE 09H A 09H", workers: ["FAJARDO RODRIGUEZ, ADRIAN", "NODA ALAMO, DAVID", "LOPEZ BETANCORT, JUAN JOSE", "LOPEZ GONZALEZ, GLORIA", "CARABALLO HERNANDEZ, JAVIER", "CORUJO FERNANDEZ, JONAY", "PEREZ CORUJO, DIANA", "RAMIREZ CAÑADA, FABIAN", "GUADALUPE HERNANDEZ, RAQUEL"] },
  { unit: "UNIDAD SVB 1320 ARRECIFE - 12H/DIA DE 10H A 22H", workers: ["HERNANDEZ CASTAÑO, NAREN DARNEL", "MORALES GONZALEZ, GILBERTO", "HERANDEZ MARTIN, HECTOR", "ROJAS RODRIGUEZ, PAULA", "VAZQUEZ MARQUEZ, ALEXANDRA"] },
  { unit: "UNIDAD SVA 1390 ARRECIFE - 24H/DIA DE 09H A 09H", workers: ["BETANCORT DUARTE, CARLOS DAVID", "LEON FERNANDEZ, BORJA", "MOREIRA PEREZ, RAUL", "BETANCORT CURBELO, RUBEN JONAS", "MORENO BRITO, JEFFREY", "RODRIGUEZ LORENZO, MANUEL", "GUADALUPE GARCIA, ANGELA", "BARBER FERNANDEZ, JOSE ANTONIO", "CABRERA ALAYON, CRISTIAN"] },
  { unit: "UNIDAD SVB 1311 ARRECIFE - 24H/DIA DE 09H A 09H", workers: ["PEREZ ALONSO, IVAN CARLOS", "LONGWORTH, DYLAN JOHN", "VILAVERT SANCHEZ, ANGEL DAVID", "IRUNE GARCIA BADIOLA", "VERGARA ALZATE, ANDRES", "GONZALEZ OCAMPO, JUAN CARLOS", "ROQUE RUEDA, LEYRE", "PEÑA IRRAZABAL, MARIA FERNANDA", "VALIENTE RODRIGUEZ, ANTONIO", "PAETOW LOZANO, SARA", "RAMIREZ FIGUERA, CARLA", "MEDINA DE LEON, NAYADE"] },
  { unit: "UNIDAD SVB 1312 TIAS - 24H/DIA DE 09H A 09H", workers: ["MARTINEZ PEREZ, RUBEN", "BETANCOR DIAZ, CORAIMA", "AFONSO SANTANA, DIANA", "RODIÑO SANCHEZ, MANUEL", "LOPEZ DAUTA, ROBERTO AIRAM", "PEREZ RODRIGUEZ, ZENAIDA", "MIRANDA MORALES, ISRAEL", "GRILLO DIAZ, MARCOS DAVID", "SANTANA MONTELONGO. JUAN VICENTE"] },
  { unit: "UNIDAD SVB 1313 TIAS - 24H/DIA DE 09H A 09H", workers: ["MARTIN CALERO, ADRIAN", "BALLESTEROS MALDONADO, FRANCISCO JAVIER", "GONZALEZ AMORIN, DAVID", "RODRIGUEZ GUERRA, CRISTINA", "CAVA HURTADO, MOISES LUCIO", "MORALES PACHECO, CLAUDIA", "GARCIA PEREYRA, JOSE AGUSTIN", "ESCALONA MARTINEZ, JOSE ALEJANDRO"] },
  { unit: "UNIDAD SVB 1314 PLAYABLANCA - 24H/DIA DE 09H A 09H", workers: ["TIRADO MARTIN, ALEJANDRO", "DASA TALAVERA, ALEJANDRA", "RODRIGUEZ CABRERA, CRISTO DE JESUS", "MENA BARANDICA, ELEN DAIAN", "FONDON RODRIGUEZ, GONZALO", "SANCHEZ MARTINEZ, JORGE ANTONIO", "CEDRES GONZALEZ, HECTOR", "MARTIN LEMES, MARIA MACARENA"] },
  { unit: "UNIDAD SVB 1315 ARRIETA - 24H/DIA DE 09H A 09H", workers: ["GARCIA CARBALLO, MIGUEL ANGEL", "TABARES MARQUEZ, TEXENERY ROSA", "PEREZ CUADROS, EVA MARIA", "MEHAND MARTIN, YASSIN", "GONZALEZ CALLERO, FRANCISCO JAVIER", "MARTIN ARMAS, ROBERTO", "BARREIRO DO CARMO, JOAQUIN", "CEDRES LEMES, MARTIN MANUEL"] },
  { unit: "UNIDAD SVA 1391 PLAYABLANCA - 24H/DIA DE 09H A 09H", workers: ["ALGUACIL MIRALLES, ALEJANDRO", "ARCA VASQUEZ, BRYAN", "MOREIRA ARMAS, ANTONIO", "ROSARIO GALINDO, ELISABET DEL PINO", "RODRIGUEZ NOZAL, MARIA VALLE", "FONDON RODRIGUEZ, OSCAR", "ALVAREZ PEREZ, JAZMINA MARIA", "SILVA HERNANDEZ, ACOIDAN"] },
  { unit: "UNIDADES TSNU DE L/V 07H A 15H", workers: ["CEDRES DORTA, TANIA", "SCHLOSSER, MARIE", "MORENO GÜEMES, ROCIO", "BOLAÑOS ARANDA, JOSE IGNACIO", "MEDINA CASANOVA, ADRIAN", "CABRERA MARQUEZ, MIGUEL ANGEL", "MARTIN FONTES, IBAN", "CABRERA SUAREZ, NATANAEL", "ALESSANDRO OMAR, PARTINICO", "GOMEZ RAMIREZ, ZULEIMA", "GONZALEZ CURBELO, GUACIMARA", "SAMUEL JHOSUE MOYA PAREDES", "PEREZ DOMINGUEZ, IRIEN", "TAVIO GARCIA, MARIA DOLORES", "BONILLA CURBELO, ANTONIO", "ZIZI BAGDAD, YUNAS", "SOSA ALMEIDA, NEREA", "MARTIN FONTES, JUAN GINES", "CORDERO QUESADA, ALEJANDRO", "CASADO FARIÑA, CARLOS JESUS", "CAMARA CAMARA, KADY", "LOPEZ CASTAÑEYRA, GUILLERMO", "GONZALEZ CALLERO, CRISTO MANUEL", "RODRIGUEZ CABRERA, ALVARO", "MARTIN GARCIA, RUYMAN", "MARRERO GARCIA, ALFREDO", "LARA DELGADO, GEMA", "SANCHEZ GARCIA, JENNIFER", "HERNANDEZ GARCIA, CARMEN ROSA", "SALCES ALVAREZ, MANUEL", "RUIZ HIGUERA, MANUEL JESUS", "VICTORIA HERNANDEZ, BRYAN STEVEN", "VIÑA TEJERA, JONAY MANUEL", "CERON MERINO, RAMON JOSE", "GALLARDO ORTIZ, JESUS", "GOMEZ MARTINEZ, JOANA IVETH", "COLAS MARCOS, XABIER", "GODDARD BAGSHAW, LUKE", "PEREZ CUBAS, ROMEN", "GASPAR GUERRERO, ANTONIO JESUS", "LOPEZ DIAZ, RUYMAN", "VEGAS VALLADARES, DARWIN", "ROSARIO MONTELONGO, LORENZO", "ARROCHA CEDRES, ADELTO JAVIER", "RODRIGUEZ MORALES, ITHAISA", "PEREZ GARCIA, XIOMARA", "ARMAS CISILIA, DANIEL", "MENDEZ MARRERO, ALFONSO", "OSPINA ANGEL, SHARON", "BARRIO MARGULLON, SORAYA", "JUAN PERDOMO, ABELARDO", "HERNADEZ MOYCANA", "HERNANDEZ RAIZA, OMAIRA"] },
  { unit: "TSNU 24H - AMBULANCIA", workers: [] },
  { unit: "TSNU 12H - AMBULANCIA DE 07H A 19H", workers: [] },
  { unit: "TSNU 12H - AMBULANCIA DE 10H A 22H", workers: [] }
];

// ========================
// Storage keys
// ========================
const STORAGE_KEY = 'horas_extras_log_v1';
const UNITS_KEY = 'horas_extras_units_v1';
const BACKUP_KEY = 'horas_extras_backup_v1';
const THEME_KEY = 'horas_extras_theme';

let records = loadRecords();
let sortState = { column: 'date', direction: 'desc' };
let calendarYear = new Date().getFullYear();
let calendarMonth = new Date().getMonth();

// Pagination
const PAGE_SIZE = 25;
let currentPage = 1;
let lastFilteredRecords = [];

let lastEditTime = null;

// ========================
// Storage helpers
// ========================
function loadRecords() {
  try {
    const r = localStorage.getItem(STORAGE_KEY);
    if (r) return JSON.parse(r);
  } catch(e) {}
  return [];
}

function saveRecords() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

function getUnits() {
  try {
    const saved = localStorage.getItem(UNITS_KEY);
    if (saved) return JSON.parse(saved);
  } catch(e) {}
  return JSON.parse(JSON.stringify(INITIAL_UNITS));
}

function saveUnits(units) {
  localStorage.setItem(UNITS_KEY, JSON.stringify(units));
}

function addWorker(unitIdx, workerName) {
  const units = getUnits();
  if (units[unitIdx]) {
    const upper = workerName.trim().toUpperCase();
    if (!units[unitIdx].workers.includes(upper)) {
      units[unitIdx].workers.push(upper);
      saveUnits(units);
    }
  }
}

function removeWorker(unitIdx, workerIdx) {
  const units = getUnits();
  if (units[unitIdx] && units[unitIdx].workers[workerIdx]) {
    units[unitIdx].workers.splice(workerIdx, 1);
    saveUnits(units);
  }
}

function addUnit(unitName) {
  const units = getUnits();
  const upper = unitName.trim().toUpperCase();
  if (!upper) return false;
  if (units.some(u => u.unit === upper)) { showToastMsg('Esa unidad ya existe.', 'warning'); return false; }
  units.push({ unit: upper, workers: [] });
  saveUnits(units);
  return true;
}

function removeUnit(unitIdx) {
  const units = getUnits();
  if (!units[unitIdx]) return;
  if (!window.confirm(`¿Eliminar la unidad "${units[unitIdx].unit}"? Se borrarán todos sus trabajadores.`)) return;
  units.splice(unitIdx, 1);
  saveUnits(units);
}

// ========================
// HTML escape utility
// ========================
function escHtml(s) {
  const d = document.createElement('div');
  d.textContent = s || '';
  return d.innerHTML;
}

// ========================
// Toast notifications
// ========================
function showToastMsg(msg, type = 'info') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
  }
  const icons = { info: 'ℹ️', success: '✅', warning: '⚠️', error: '❌' };
  toast.innerHTML = `<span>${icons[type] || 'ℹ️'} ${escHtml(msg)}</span><button class="toast-close" aria-label="Cerrar">✕</button>`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

// ========================
// Theme
// ========================
function toggleTheme() {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  localStorage.setItem(THEME_KEY, isLight ? 'light' : 'dark');
  const btn = document.getElementById('themeBtn');
  if (btn) btn.innerText = isLight ? '☀️' : '🌙';
}

function loadTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'light') {
    document.body.classList.add('light-mode');
    const btn = document.getElementById('themeBtn');
    if (btn) btn.innerText = '☀️';
  }
}

// ========================
// Dropdown menus (ARIA)
// ========================
function toggleDropdown(id) {
  const menu = document.getElementById(id);
  const isOpen = menu.classList.contains('show');
  closeAllDropdowns();
  if (!isOpen) menu.classList.add('show');
}

function closeAllDropdowns() {
  document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) closeAllDropdowns();
});

// ========================
// Modal management + Focus Trap
// ========================
let lastFocusedElement = null;

function openModal(id) {
  lastFocusedElement = document.activeElement;
  const modal = document.getElementById(id);
  if (!modal) return false;
  if (modal === lastFocusedElement?.closest('.modal')) return false;
  document.querySelectorAll('.modal.open').forEach(m => m.classList.remove('open'));
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  trapFocus(modal);
  return true;
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  if (lastFocusedElement && lastFocusedElement.focus) {
    lastFocusedElement.focus();
  }
}

// Focus trap: keep tab cycling inside the modal
function trapFocus(modal) {
  const focusables = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusables.length === 0) return;
  const first = focusables[0];
  first.focus();
  modal.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
}

// ========================
// Keyboard shortcuts
// ========================
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && (e.key === 'n' || e.key === 'N')) {
    e.preventDefault();
    openRecordModal();
  }
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.open').forEach(m => m.classList.remove('open'));
    closeAllDropdowns();
  }
});

// ========================
// Sorting & rendering
// ========================
function sortTable(column) {
  if (sortState.column === column) {
    sortState.direction = sortState.direction === 'asc' ? 'desc' : 'asc';
  } else {
    sortState.column = column;
    sortState.direction = 'desc';
  }
  document.querySelectorAll('th.sortable').forEach(th => {
    th.classList.remove('sorted-asc', 'sorted-desc');
  });
  const activeTh = document.querySelector(`th.sortable[onclick*="${column}"]`);
  if (activeTh) {
    activeTh.classList.add(sortState.direction === 'asc' ? 'sorted-asc' : 'sorted-desc');
  }
  currentPage = 1;
  render();
}

function applySort(recordsToSort) {
  const { column, direction } = sortState;
  return recordsToSort.slice().sort((a, b) => {
    let aVal = a[column] ?? '';
    let bVal = b[column] ?? '';
    if (column === 'date') {
      const parseDate = (d) => {
        const parts = d.split('/');
        return parts.length === 3 ? new Date(`${parts[2]}-${parts[1]}-${parts[0]}`) : new Date();
      };
      aVal = parseDate(a.date).getTime();
      bVal = parseDate(b.date).getTime();
    }
    if (column === 'hours') {
      aVal = parseFloat(aVal);
      bVal = parseFloat(bVal);
    }
    const comparison = String(aVal).localeCompare(String(bVal), 'es-ES', { numeric: true });
    return direction === 'asc' ? comparison : -comparison;
  });
}

function initDatalists() {
  const uSel = document.getElementById('recUnit');
  uSel.innerHTML = '';
  getUnits().forEach(u => {
    const opt = document.createElement('option');
    opt.value = u.unit;
    opt.textContent = u.unit.split(' - ')[0];
    uSel.appendChild(opt);
  });
  uSel.addEventListener('change', filterWorkersByUnit);
  const dl = document.getElementById('workersDatalist');
  dl.innerHTML = '';
}

function filterWorkersByUnit() {
  const unit = document.getElementById('recUnit').value;
  const dl = document.getElementById('workersDatalist');
  dl.innerHTML = '';
  if (!unit) {
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.disabled = true;
    placeholder.textContent = 'Selecciona una unidad primero';
    dl.appendChild(placeholder);
    return;
  }
  const unitObj = getUnits().find(u => u.unit === unit);
  if (unitObj) {
    unitObj.workers.forEach(w => {
      const opt = document.createElement('option');
      opt.value = w;
      dl.appendChild(opt);
    });
  }
}

// ========================
// Modal: Record (hours)
// ========================
function openRecordModal() {
  document.getElementById('editingRecordId').value = '';
  document.getElementById('modalTitle').innerText = '⏱️ Registrar Horas Extras / Cobertura';
  document.getElementById('recWorker').value = '';
  document.getElementById('recUnit').selectedIndex = 0;
  document.getElementById('recCovering').value = '';
  document.getElementById('recReason').value = '';
  document.getElementById('recHours').value = 12;
  document.getElementById('recDate').value = new Date().toISOString().slice(0, 10);
  filterWorkersByUnit();
  openModal('recordModal');
}

function editRecord(id) {
  const r = records.find(x => x.id === id);
  if (!r) return;
  document.getElementById('editingRecordId').value = id;
  document.getElementById('modalTitle').innerText = '✏️ Editar Registro de Horas';
  document.getElementById('recWorker').value = r.worker;
  document.getElementById('recUnit').value = r.unit;
  document.getElementById('recHours').value = r.hours;
  document.getElementById('recCovering').value = r.covering.includes('N/A') ? '' : r.covering;
  document.getElementById('recReason').value = r.reason;
  filterWorkersByUnit();
  if (r.date) {
    const parts = r.date.split('/');
    if (parts.length === 3) {
      document.getElementById('recDate').value = `${parts[2]}-${parts[1].padStart(2,'0')}-${parts[0].padStart(2,'0')}`;
    } else {
      document.getElementById('recDate').value = new Date().toISOString().slice(0, 10);
    }
  }
  openModal('recordModal');
}

function setReason(txt) {
  document.getElementById('recReason').value = txt;
}

function saveRecord() {
  const editId = document.getElementById('editingRecordId').value;
  const worker = document.getElementById('recWorker').value.trim().toUpperCase();
  const unit = document.getElementById('recUnit').value;
  const dateVal = document.getElementById('recDate').value;
  const hours = parseFloat(document.getElementById('recHours').value) || 0;
  const covering = document.getElementById('recCovering').value.trim().toUpperCase();
  const reason = document.getElementById('recReason').value.trim();

  if (!worker) { showToastMsg('Introduce el nombre del trabajador.', 'warning'); return; }
  if (hours <= 0) { showToastMsg('Las horas deben ser mayores a 0.', 'warning'); return; }

  const formattedDate = dateVal ? new Date(dateVal + 'T00:00:00').toLocaleDateString('es-ES') : new Date().toLocaleDateString('es-ES');

  const isDuplicate = records.some(r =>
    r.id !== parseInt(editId) &&
    r.worker === worker &&
    r.unit === unit &&
    r.date === formattedDate
  );
  if (isDuplicate) {
    showToastMsg(`El trabajador "${worker}" ya está registrado para el ${formattedDate} en ${unit.split(' - ')[0]}.`, 'error');
    return;
  }

  const overlapRecord = records.find(r =>
    r.id !== parseInt(editId) &&
    r.worker === worker &&
    r.date === formattedDate
  );
  if (overlapRecord) {
    const msg = `El trabajador "${worker}" ya tiene horas el ${formattedDate} en: ${overlapRecord.unit.split(' - ')[0]}.\n\n¿Deseas continuar con "${unit.split(' - ')[0]}" de todas formas?`;
    if (!window.confirm(msg)) return;
  }

  if (editId) {
    const idx = records.findIndex(r => r.id === parseInt(editId));
    if (idx !== -1) {
      records[idx].worker = worker;
      records[idx].unit = unit;
      records[idx].date = formattedDate;
      records[idx].hours = hours;
      records[idx].covering = covering || 'N/A (Extra Directa)';
      records[idx].reason = reason || 'Horas extras asignadas';
    }
  } else {
    records.unshift({
      id: Date.now(),
      worker, unit, date: formattedDate, hours,
      covering: covering || 'N/A (Extra Directa)',
      reason: reason || 'Horas extras asignadas',
      createdAt: new Date().toLocaleString('es-ES')
    });
  }

  saveRecords();
  currentPage = 1;
  markEdited();
  render();
  closeModal('recordModal');
  showToastMsg(editId ? 'Registro actualizado.' : 'Registro creado.', 'success');
}

function deleteRecord(id) {
  if (!window.confirm('¿Eliminar este registro de horas extras?')) return;
  records = records.filter(r => r.id !== id);
  saveRecords();
  markEdited();
  render();
  showToastMsg('Registro eliminado.', 'success');
}

function clearAllRecords() {
  if (records.length === 0) return;
  if (!window.confirm('¿Seguro que deseas vaciar toda la lista?')) return;
  records = [];
  saveRecords();
  markEdited();
  render();
  showToastMsg('Lista vaciada.', 'success');
}

// ========================
// Filters init
// ========================
function initMonthFilter() {
  const mSel = document.getElementById('monthFilter');
  mSel.innerHTML = '<option value="all">📅 Todas las Fechas</option>';
  const now = new Date();
  const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  for (let i = 0; i < 6; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthNum = d.getMonth() + 1;
    const year = d.getFullYear();
    const label = i === 0 ? '🗓️ Este Mes' : i === 1 ? '📅 Mes Pasado' : `📅 ${months[d.getMonth()]} ${year}`;
    const opt = document.createElement('option');
    opt.value = `month_${year}_${monthNum}`;
    opt.textContent = `${label} (${months[d.getMonth()].slice(0,3)} ${year})`;
    if (i === 0) opt.selected = true;
    mSel.appendChild(opt);
  }
}

function initUnitFilter() {
  const uSel = document.getElementById('unitFilter');
  uSel.innerHTML = '<option value="all">🏢 Todas las Unidades</option>';
  getUnits().forEach(u => {
    const opt = document.createElement('option');
    opt.value = u.unit;
    opt.textContent = u.unit.split(' - ')[0];
    uSel.appendChild(opt);
  });
}

// ========================
// Main render
// ========================
function render() {
  const query = (document.getElementById('searchInput').value || '').toLowerCase().trim();
  const monthFilter = document.getElementById('monthFilter').value;
  const unitFilter = document.getElementById('unitFilter').value;
  const tbody = document.getElementById('recordsTbody');
  const emptyState = document.getElementById('emptyState');
  tbody.innerHTML = '';

  let filtered = records;
  if (monthFilter.startsWith('month_')) {
    const [, , year, month] = monthFilter.split('_');
    const monthNum = parseInt(month);
    filtered = filtered.filter(r => {
      const parts = r.date.split('/');
      if (parts.length === 3) {
        return parseInt(parts[1]) === monthNum && parseInt(parts[2]) === parseInt(year);
      }
      return false;
    });
  }
  if (unitFilter !== 'all') {
    filtered = filtered.filter(r => r.unit === unitFilter);
  }
  if (query) {
    filtered = filtered.filter(r =>
      r.worker.toLowerCase().includes(query) ||
      r.unit.toLowerCase().includes(query) ||
      r.covering.toLowerCase().includes(query) ||
      r.reason.toLowerCase().includes(query) ||
      r.date.includes(query)
    );
  }
  filtered = applySort(filtered);
  lastFilteredRecords = filtered;

  if (filtered.length === 0) {
    emptyState.style.display = 'block';
    document.getElementById('tablePagination').style.display = 'none';
  } else {
    emptyState.style.display = 'none';
    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;
    const start = (currentPage - 1) * PAGE_SIZE;
    const pageRecords = filtered.slice(start, start + PAGE_SIZE);
    pageRecords.forEach(r => {
      const tr = document.createElement('tr');
      const isCovering = r.covering && !r.covering.includes('N/A');
      tr.dataset.recordId = r.id;
      tr.innerHTML = `
        <td style="font-weight:700;">${escHtml(r.worker)}</td>
        <td>📅 ${escHtml(r.date)}</td>
        <td><span style="font-size:12px;color:var(--muted)">${escHtml(r.unit.split(' - ')[0])}</span></td>
        <td>${isCovering ? `<span class="badge badge-covered">🔄 ${escHtml(r.covering)}</span>` : `<span class="badge badge-direct">⚡ Extra Directa</span>`}</td>
        <td><span class="badge badge-hours">+${r.hours}h</span></td>
        <td>${escHtml(r.reason)}</td>
        <td style="text-align:right">
          <button class="btn btn-sm" data-action="edit-record" data-record-id="${r.id}" aria-label="Editar registro">✏️</button>
          <button class="btn btn-sm btn-danger" data-action="delete-record" data-record-id="${r.id}" aria-label="Borrar registro">✕</button>
        </td>`;
      tbody.appendChild(tr);
    });
    renderPagination(filtered.length, totalPages);
  }

  let totalHours = 0;
  const workerTotals = {};
  let coverCount = 0;
  filtered.forEach(r => {
    totalHours += r.hours;
    workerTotals[r.worker] = (workerTotals[r.worker] || 0) + r.hours;
    if (r.covering && !r.covering.includes('N/A')) coverCount++;
  });
  const uniqueWorkers = Object.keys(workerTotals).length;
  let maxWorkerName = '-';
  let maxHours = 0;
  for (const [w, h] of Object.entries(workerTotals)) {
    if (h > maxHours) { maxHours = h; maxWorkerName = `${w} (+${h}h)`; }
  }
  document.getElementById('statTotal').innerText = totalHours + 'h';
  document.getElementById('statWorkers').innerText = uniqueWorkers;
  document.getElementById('statMaxWorker').innerText = maxHours > 0 ? maxWorkerName : '-';
  document.getElementById('statCoverages').innerText = coverCount;
  updateStatsBars(totalHours, uniqueWorkers, coverCount);
  updateLastUpdated();

  document.querySelectorAll('th.sortable').forEach(th => {
    th.classList.remove('sorted-asc', 'sorted-desc');
    const onclk = th.getAttribute('onclick') || '';
    if (onclk.includes(`'${sortState.column}'`)) {
      th.classList.add(sortState.direction === 'asc' ? 'sorted-asc' : 'sorted-desc');
    }
  });
}

function renderPagination(totalRecords, totalPages) {
  const container = document.getElementById('tablePagination');
  if (!container) return;
  container.style.display = 'flex';
  if (totalRecords <= PAGE_SIZE) { container.innerHTML = `<span class="info">${totalRecords} registro${totalRecords !== 1 ? 's' : ''}</span>`; return; }
  let html = `<button data-page="1" ${currentPage === 1 ? 'disabled' : ''} aria-label="Primera página">«</button>`;
  html += `<button data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''} aria-label="Página anterior">‹</button>`;
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);
  if (startPage > 1) html += `<span class="info">…</span>`;
  for (let p = startPage; p <= endPage; p++) {
    html += `<button data-page="${p}" class="${p === currentPage ? 'active' : ''}" aria-label="Página ${p}" ${p === currentPage ? 'aria-current="page"' : ''}>${p}</button>`;
  }
  if (endPage < totalPages) html += `<span class="info">…</span>`;
  html += `<button data-page="${currentPage + 1}" ${currentPage === totalPages ? 'disabled' : ''} aria-label="Página siguiente">›</button>`;
  html += `<button data-page="${totalPages}" ${currentPage === totalPages ? 'disabled' : ''} aria-label="Última página">»</button>`;
  const start = (currentPage - 1) * PAGE_SIZE + 1;
  const end = Math.min(start + PAGE_SIZE - 1, totalRecords);
  html += `<span class="info">${start}-${end} de ${totalRecords}</span>`;
  container.innerHTML = html;
}

function goToPage(page) {
  currentPage = parseInt(page, 10);
  render();
  const card = document.querySelector('.table-card');
  if (card) window.scrollTo({ top: card.offsetTop - 100, behavior: 'smooth' });
}

function filterByStat(type) {
  if (type === 'total') {
    document.getElementById('monthFilter').value = 'all';
    document.getElementById('unitFilter').value = 'all';
    document.getElementById('searchInput').value = '';
    currentPage = 1;
    render();
    showToastMsg('Mostrando todos los registros.', 'info');
  } else if (type === 'workers') {
    openWorkerSummaryModal();
  } else if (type === 'coverages') {
    document.getElementById('searchInput').value = '';
    currentPage = 1;
    render();
    showToastMsg(`${document.getElementById('statCoverages').innerText} coberturas registradas.`, 'info');
  }
}

function updateLastUpdated() {
  const el = document.getElementById('lastUpdated');
  if (!el) return;
  if (!lastEditTime) { el.textContent = ''; return; }
  const diff = Math.round((Date.now() - lastEditTime) / 60000);
  const txt = diff === 0 ? 'recién editado' :
    diff < 60 ? `Última edición: hace ${diff} min` :
    `Última edición: hace ${Math.round(diff/60)} h`;
  el.textContent = txt;
}

function markEdited() {
  lastEditTime = Date.now();
  updateLastUpdated();
}

// Scroll-to-top FAB visibility
window.addEventListener('scroll', () => {
  const btn = document.getElementById('scrollToTopBtn');
  if (!btn) return;
  btn.style.display = window.scrollY > 300 ? 'flex' : 'none';
});

function updateStatsBars(totalHours, uniqueWorkers, coverCount) {
  const maxHours = 200, maxWorkers = 50, maxCovers = 30;
  const bars = document.querySelectorAll('.stat-box .bar-fill');
  if (bars[0]) bars[0].style.width = Math.min(100, (totalHours / maxHours) * 100) + '%';
  if (bars[1]) bars[1].style.width = Math.min(100, (uniqueWorkers / maxWorkers) * 100) + '%';
  if (bars[3]) bars[3].style.width = Math.min(100, (coverCount / maxCovers) * 100) + '%';
}

// ========================
// Charts modal
// ========================
function openChartsModal() {
  const unitTotals = {};
  const reasonTotals = {};
  let maxUnitHours = 0;
  records.forEach(r => {
    const uName = r.unit.split(' - ')[0];
    unitTotals[uName] = (unitTotals[uName] || 0) + r.hours;
    if (unitTotals[uName] > maxUnitHours) maxUnitHours = unitTotals[uName];
    const rName = r.reason.split('/')[0].trim();
    reasonTotals[rName] = (reasonTotals[rName] || 0) + r.hours;
  });
  const unitContainer = document.getElementById('unitChartsContainer');
  unitContainer.innerHTML = '';
  if (Object.keys(unitTotals).length === 0) {
    unitContainer.innerHTML = '<div style="font-size:12px;color:var(--muted)">Sin datos para mostrar gráficos</div>';
  } else {
    const sortedUnits = Object.entries(unitTotals).sort((a, b) => b[1] - a[1]);
    for (const [u, h] of sortedUnits) {
      const pct = maxUnitHours > 0 ? Math.round((h / maxUnitHours) * 100) : 0;
      unitContainer.innerHTML += `
        <div class="chart-item">
          <div class="chart-label"><span>${escHtml(u)}</span><span>+${h}h</span></div>
          <div class="chart-bar-bg"><div class="chart-bar-fill" style="width:${pct}%;"></div></div>
        </div>`;
    }
  }
  const reasonContainer = document.getElementById('reasonChartsContainer');
  reasonContainer.innerHTML = '';
  if (Object.keys(reasonTotals).length === 0) {
    reasonContainer.innerHTML = '<div style="font-size:12px;color:var(--muted)">Sin datos para mostrar gráficos</div>';
  } else {
    const sortedReasons = Object.entries(reasonTotals).sort((a, b) => b[1] - a[1]);
    for (const [r, h] of sortedReasons) {
      reasonContainer.innerHTML += `
        <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border);font-size:12px">
          <span>${escHtml(r)}</span>
          <span style="font-weight:bold;color:var(--primary)">+${h}h</span>
        </div>`;
    }
  }
  openModal('chartsModal');
  renderMonthlyChart();
}

// ========================
// Calendar modal
// ========================
function openCalendarModal() {
  const now = new Date();
  calendarYear = now.getFullYear();
  calendarMonth = now.getMonth();
  renderCalendar();
  openModal('calendarModal');
}

function renderCalendar() {
  const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  const days = ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'];
  const container = document.getElementById('calendarContainer');
  const recordMap = {};
  records.forEach(r => {
    const parts = r.date.split('/');
    if (parts.length === 3) {
      const key = `${parts[2]}-${parts[1].padStart(2,'0')}-${parts[0].padStart(2,'0')}`;
      recordMap[key] = (recordMap[key] || 0) + 1;
    }
  });
  const today = new Date();
  const todayKey = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
  let html = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">`;
  html += `<button class="btn btn-sm" data-cal-nav="-1" aria-label="Mes anterior">◀</button>`;
  html += `<b style="font-size:16px;">${months[calendarMonth]} ${calendarYear}</b>`;
  html += `<button class="btn btn-sm" data-cal-nav="1" aria-label="Mes siguiente">▶</button>`;
  html += `</div>`;
  html += `<div class="calendar-grid">`;
  days.forEach(d => { html += `<div class="calendar-day-header">${d}</div>`; });
  const firstDay = new Date(calendarYear, calendarMonth, 1);
  let startDay = firstDay.getDay() - 1;
  if (startDay < 0) startDay = 6;
  const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
  for (let i = 0; i < startDay; i++) html += `<div></div>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const key = `${calendarYear}-${String(calendarMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const count = recordMap[key] || 0;
    const isToday = key === todayKey;
    const classes = ['calendar-day'];
    if (isToday) classes.push('today');
    if (count > 0) classes.push('has-records');
    html += `<div class="${classes.join(' ')}" data-cal-day="${d}" role="button" tabindex="0" aria-label="${d} de ${months[calendarMonth]}, ${count} registros">
      <div style="font-weight:600;">${d}</div>
      ${count > 0 ? `<div style="font-size:10px;color:var(--primary);">${count} reg.</div>` : ''}
    </div>`;
  }
  html += `</div>`;
  html += `<div id="calDayDetail" style="margin-top:12px;"></div>`;
  container.innerHTML = html;
}

function changeCalMonth(delta) {
  calendarMonth += delta;
  if (calendarMonth > 11) { calendarMonth = 0; calendarYear++; }
  if (calendarMonth < 0) { calendarMonth = 11; calendarYear--; }
  renderCalendar();
}

function showCalDayDetail(year, month, day) {
  const dateStr = `${String(day).padStart(2,'0')}/${String(month+1).padStart(2,'0')}/${year}`;
  const dayRecords = records.filter(r => r.date === dateStr);
  const detail = document.getElementById('calDayDetail');
  if (dayRecords.length === 0) {
    detail.innerHTML = `<div style="padding:12px;text-align:center;color:var(--muted);font-size:13px;">Sin registros el ${dateStr}</div>`;
    return;
  }
  let html = `<div style="border:1px solid var(--border);border-radius:8px;overflow:hidden;"><div style="padding:8px 12px;background:var(--primary-glow);font-weight:600;font-size:13px;">📅 ${dateStr} — ${dayRecords.length} registro${dayRecords.length > 1 ? 's' : ''}</div>`;
  dayRecords.forEach(r => {
    html += `<div style="padding:8px 12px;border-top:1px solid var(--border);font-size:12px;">
      <b>${escHtml(r.worker)}</b> <span class="badge badge-hours">+${r.hours}h</span><br>
      <span style="color:var(--muted);">${escHtml(r.unit.split(' - ')[0])}</span>
    </div>`;
  });
  html += `</div>`;
  detail.innerHTML = html;
}

// ========================
// Worker summary modal
// ========================
function openWorkerSummaryModal() {
  const mSel = document.getElementById('summaryMonthFilter');
  mSel.innerHTML = '<option value="all">Todos</option>';
  const now = new Date();
  const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  for (let i = 0; i < 6; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthNum = d.getMonth() + 1;
    const year = d.getFullYear();
    const opt = document.createElement('option');
    opt.value = `month_${year}_${monthNum}`;
    opt.textContent = `${months[d.getMonth()]} ${year}`;
    mSel.appendChild(opt);
  }
  renderWorkerSummary();
  openModal('workerSummaryModal');
}

function renderWorkerSummary() {
  const filter = document.getElementById('summaryMonthFilter').value;
  let filtered = records;
  if (filter.startsWith('month_')) {
    const [, , year, month] = filter.split('_');
    const monthNum = parseInt(month);
    filtered = filtered.filter(r => {
      const parts = r.date.split('/');
      return parts.length === 3 && parseInt(parts[1]) === monthNum && parseInt(parts[2]) === parseInt(year);
    });
  }
  const workerData = {};
  filtered.forEach(r => {
    if (!workerData[r.worker]) workerData[r.worker] = { worker: r.worker, unit: r.unit, hours: 0, days: new Set() };
    workerData[r.worker].hours += r.hours;
    workerData[r.worker].days.add(r.date);
  });
  const sorted = Object.values(workerData).sort((a, b) => b.hours - a.hours);
  const tbody = document.getElementById('workerSummaryTbody');
  tbody.innerHTML = '';
  sorted.forEach(d => {
    tbody.innerHTML += `
      <tr style="border-bottom:1px solid var(--border);">
        <td style="padding:8px;font-weight:600;">${escHtml(d.worker)}</td>
        <td style="padding:8px;font-size:11px;color:var(--muted);">${escHtml(d.unit.split(' - ')[0])}</td>
        <td style="padding:8px;text-align:center;"><span class="badge badge-hours">+${d.hours}h</span></td>
        <td style="padding:8px;text-align:center;">${d.days.size}</td>
        <td style="padding:8px;text-align:center;">${(d.hours / d.days.size).toFixed(1)}h</td>
      </tr>`;
  });
  if (sorted.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="padding:16px;text-align:center;color:var(--muted);">Sin datos para este período</td></tr>';
  }
}

function exportWorkerSummaryExcel() {
  loadSheetJS().then(() => doExportWorkerSummaryExcel()).catch(() => showToastMsg('No se pudo cargar la librería Excel.', 'error'));
}

function doExportWorkerSummaryExcel() {
  const filter = document.getElementById('summaryMonthFilter').value;
  let filtered = records;
  if (filter.startsWith('month_')) {
    const [, , year, month] = filter.split('_');
    const monthNum = parseInt(month);
    filtered = filtered.filter(r => {
      const parts = r.date.split('/');
      return parts.length === 3 && parseInt(parts[1]) === monthNum && parseInt(parts[2]) === parseInt(year);
    });
  }
  const workerData = {};
  filtered.forEach(r => {
    if (!workerData[r.worker]) workerData[r.worker] = { worker: r.worker, unit: r.unit, hours: 0, days: new Set() };
    workerData[r.worker].hours += r.hours;
    workerData[r.worker].days.add(r.date);
  });
  const rows = Object.values(workerData).sort((a, b) => b.hours - a.hours).map(d => ({
    'Trabajador': d.worker,
    'Unidad': d.unit.split(' - ')[0],
    'Total Horas': d.hours,
    'Días Trabajados': d.days.size,
    'Promedio Horas/Día': (d.hours / d.days.size).toFixed(1)
  }));
  const ws = XLSX.utils.json_to_sheet(rows);
  ws['!cols'] = [{wch:35},{wch:40},{wch:12},{wch:15},{wch:18}];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Resumen Trabajador');
  XLSX.writeFile(wb, `resumen_trabajador_${new Date().toISOString().slice(0,10)}.xlsx`);
  showToastMsg('Excel descargado.', 'success');
}

// ========================
// Workers management modal
// ========================
function openWorkersModal() {
  const uSel = document.getElementById('manageUnitSelect');
  uSel.innerHTML = '';
  getUnits().forEach((u, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = u.unit.split(' - ')[0];
    uSel.appendChild(opt);
  });
  renderWorkersList();
  openModal('workersModal');
}

function renderWorkersList() {
  const unitIdx = parseInt(document.getElementById('manageUnitSelect').value);
  const units = getUnits();
  const editInput = document.getElementById('editUnitName');
  if (units[unitIdx]) editInput.value = units[unitIdx].unit;
  const container = document.getElementById('workersList');
  container.innerHTML = '';
  if (!units[unitIdx]) return;
  units[unitIdx].workers.forEach((w, wIdx) => {
    container.innerHTML += `
      <div class="worker-item">
        <span style="font-size:13px;">${escHtml(w)}</span>
        <button class="btn btn-sm btn-danger" data-action="remove-worker" data-unit-idx="${unitIdx}" data-worker-idx="${wIdx}" aria-label="Eliminar trabajador">✕</button>
      </div>`;
  });
  if (units[unitIdx].workers.length === 0) {
    container.innerHTML = '<div style="padding:16px;color:var(--muted);text-align:center;">Sin trabajadores</div>';
  }
}

function editUnit() {
  const unitIdx = parseInt(document.getElementById('manageUnitSelect').value);
  const newName = document.getElementById('editUnitName').value.trim().toUpperCase();
  if (!newName) { showToastMsg('Introduce un nombre para la unidad.', 'warning'); return; }
  const units = getUnits();
  if (!units[unitIdx]) return;
  if (units.some((u, i) => i !== unitIdx && u.unit === newName)) {
    showToastMsg('Ya existe otra unidad con ese nombre.', 'warning');
    return;
  }
  const oldName = units[unitIdx].unit;
  units[unitIdx].unit = newName;
  saveUnits(units);
  records.forEach(r => { if (r.unit === oldName) r.unit = newName; });
  saveRecords();
  openWorkersModal();
  render();
  showToastMsg('Unidad renombrada.', 'success');
}

function addNewWorker() {
  const unitIdx = parseInt(document.getElementById('manageUnitSelect').value);
  const name = document.getElementById('newWorkerName').value;
  if (!name.trim()) { showToastMsg('Introduce un nombre.', 'warning'); return; }
  addWorker(unitIdx, name);
  document.getElementById('newWorkerName').value = '';
  renderWorkersList();
}

function addPresetUnit(name) {
  if (addUnit(name)) { openWorkersModal(); showToastMsg('Unidad agregada.', 'success'); }
}

function addCustomUnit() {
  const name = document.getElementById('newUnitName').value;
  if (!name.trim()) { showToastMsg('Introduce un nombre para la unidad.', 'warning'); return; }
  if (addUnit(name)) {
    document.getElementById('newUnitName').value = '';
    openWorkersModal();
    showToastMsg('Unidad agregada.', 'success');
  }
}

function deleteUnit() {
  const unitIdx = parseInt(document.getElementById('manageUnitSelect').value);
  removeUnit(unitIdx);
  openWorkersModal();
}

// ========================
// Excel export (lazy-loaded SheetJS)
// ========================
let sheetJSPromise = null;

function loadSheetJS() {
  if (typeof XLSX !== 'undefined') return Promise.resolve();
  if (!sheetJSPromise) {
    sheetJSPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://cdn.sheetjs.com/xlsx-0.20.1/package/dist/xlsx.full.min.js';
      s.onload = () => resolve();
      s.onerror = () => { sheetJSPromise = null; reject(new Error('load failed')); };
      document.head.appendChild(s);
    });
  }
  return sheetJSPromise;
}

function exportExcel() {
  if (records.length === 0) { showToastMsg('No hay registros para exportar.', 'warning'); return; }
  loadSheetJS().then(() => doExportExcel()).catch(() => showToastMsg('No se pudo cargar Excel. Revisa la conexión.', 'error'));
}

function doExportExcel() {
  const wb = XLSX.utils.book_new();
  const rows1 = records.map(r => ({
    'Trabajador': r.worker, 'Fecha': r.date, 'Unidad': r.unit,
    'Cubre a': r.covering, 'Horas': r.hours, 'Motivo': r.reason, 'Registrado': r.createdAt
  }));
  const ws1 = XLSX.utils.json_to_sheet(rows1);
  ws1['!cols'] = [{wch:35},{wch:14},{wch:40},{wch:30},{wch:8},{wch:25},{wch:20}];
  XLSX.utils.book_append_sheet(wb, ws1, 'Registros');
  const workerData = {};
  records.forEach(r => {
    if (!workerData[r.worker]) workerData[r.worker] = { worker: r.worker, unit: r.unit, hours: 0, days: new Set() };
    workerData[r.worker].hours += r.hours;
    workerData[r.worker].days.add(r.date);
  });
  const rows2 = Object.values(workerData).map(d => ({
    'Trabajador': d.worker,
    'Unidad': d.unit.split(' - ')[0],
    'Total Horas': d.hours,
    'Días Trabajados': d.days.size,
    'Promedio Horas/Día': (d.hours / d.days.size).toFixed(1)
  }));
  const ws2 = XLSX.utils.json_to_sheet(rows2);
  ws2['!cols'] = [{wch:35},{wch:40},{wch:12},{wch:15},{wch:18}];
  XLSX.utils.book_append_sheet(wb, ws2, 'Resumen Trabajador');
  const unitData = {};
  records.forEach(r => {
    const uKey = r.unit;
    if (!unitData[uKey]) unitData[uKey] = { unit: uKey, hours: 0, workers: new Set() };
    unitData[uKey].hours += r.hours;
    unitData[uKey].workers.add(r.worker);
  });
  const rows3 = Object.values(unitData).map(d => ({
    'Unidad': d.unit,
    'Total Horas': d.hours,
    'Trabajadores Activos': d.workers.size
  }));
  const ws3 = XLSX.utils.json_to_sheet(rows3);
  ws3['!cols'] = [{wch:45},{wch:12},{wch:18}];
  XLSX.utils.book_append_sheet(wb, ws3, 'Resumen Unidad');
  const today = new Date().toISOString().slice(0,10);
  XLSX.writeFile(wb, `control_horas_extras_${today}.xlsx`);
  showToastMsg('Excel descargado.', 'success');
}

// ========================
// CSV export
// ========================
function exportCSV() {
  if (records.length === 0) { showToastMsg('No hay registros para exportar.', 'warning'); return; }
  let csv = "\uFEFF";
  csv += "Trabajador (Sustituto);Día / Fecha;Unidad;A Quien Cubre;Horas Asignadas;Motivo / Nota;Fecha Registro\n";
  records.forEach(r => {
    csv += `"${r.worker.replace(/"/g, '""')}";"${r.date}";"${r.unit.replace(/"/g, '""')}";"${r.covering.replace(/"/g, '""')}";"${r.hours}";"${r.reason.replace(/"/g, '""')}";"${r.createdAt}"\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `control_horas_extras_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  showToastMsg('CSV descargado.', 'success');
}

// ========================
// JSON backup / import
// ========================
function exportJSON() {
  if (records.length === 0) { showToastMsg('No hay registros para exportar.', 'warning'); return; }
  const data = { version: '1.0', exportedAt: new Date().toISOString(), count: records.length, records };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `horas_extras_backup_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToastMsg('Backup JSON descargado.', 'success');
}

function importJSON() {
  const input = document.getElementById('importJSONInput');
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.records || !Array.isArray(data.records)) {
        showToastMsg('Formato de archivo inválido.', 'error');
        return;
      }
      if (!window.confirm(`¿Importar ${data.records.length} registros? Esto reemplazará los datos actuales.`)) return;
      records = data.records;
      saveRecords();
      render();
      showToastMsg(`Importados ${data.records.length} registros.`, 'success');
    } catch (err) {
      showToastMsg('Error al leer el archivo.', 'error');
    }
    input.value = '';
  };
  reader.readAsText(file);
}

// ========================
// WhatsApp share
// ========================
function shareWhatsApp() {
  if (records.length === 0) { showToastMsg('No hay registros para compartir.', 'warning'); return; }
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();
  const monthRecords = records.filter(r => {
    const parts = r.date.split('/');
    return parts.length === 3 && parseInt(parts[1]) === currentMonth && parseInt(parts[2]) === currentYear;
  });
  const totalHours = monthRecords.reduce((sum, r) => sum + r.hours, 0);
  const uniqueWorkers = new Set(monthRecords.map(r => r.worker)).size;
  const coverages = monthRecords.filter(r => r.covering && !r.covering.includes('N/A')).length;
  const workerTotals = {};
  monthRecords.forEach(r => { workerTotals[r.worker] = (workerTotals[r.worker] || 0) + r.hours; });
  const topWorkers = Object.entries(workerTotals).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const recent = monthRecords.slice(0, 5);
  let msg = `⏱️ *Resumen Horas Extras — ${now.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}*\n\n`;
  msg += `📊 *Total:* ${totalHours}h | ${uniqueWorkers} trabajadores | ${coverages} coberturas\n\n`;
  if (topWorkers.length > 0) {
    msg += `👑 *Top trabajadores:*\n`;
    topWorkers.forEach(([w, h]) => { msg += `  • ${w.split(',')[0]}: +${h}h\n`; });
    msg += `\n`;
  }
  if (recent.length > 0) {
    msg += `📋 *Últimos registros:*\n`;
    recent.forEach(r => { msg += `  • ${r.date} — ${r.worker.split(',')[0]} +${r.hours}h\n`; });
  }
  msg += `\n_Generado con Control de Horas Extras_`;
  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
}

// ========================
// PDF generation (lazy html2pdf)
// ========================
let html2pdfPromise = null;

function loadHtml2pdf() {
  if (window.html2pdf) return Promise.resolve();
  if (!html2pdfPromise) {
    html2pdfPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
      s.onload = () => resolve();
      s.onerror = () => { html2pdfPromise = null; reject(new Error('load failed')); };
      document.head.appendChild(s);
    });
  }
  return html2pdfPromise;
}

function openEmailPDFModal() {
  document.getElementById('emailPDFTo').value = '';
  openModal('emailPDFModal');
}

async function generateAndSendPDF() {
  if (records.length === 0) {
    showToastMsg('No hay registros para generar el PDF.', 'warning');
    closeModal('emailPDFModal');
    return;
  }
  const to = document.getElementById('emailPDFTo').value.trim();
  const subject = encodeURIComponent(document.getElementById('emailPDFSubject').value);
  const pdfDiv = document.createElement('div');
  pdfDiv.style.padding = '24px';
  pdfDiv.style.color = '#0f172a';
  pdfDiv.style.background = '#ffffff';
  pdfDiv.style.fontFamily = 'sans-serif';
  let html = `<div style="display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #0284c7;padding-bottom:10px;margin-bottom:16px;">`;
  html += `<div><h1 style="color:#0284c7;font-size:22px;margin:0">Informe Oficial de Horas Extras y Coberturas</h1><p style="font-size:11px;color:#64748b;margin-top:2px">Fecha de emisión: ${new Date().toLocaleString('es-ES')}</p></div>`;
  html += `<div style="font-size:24px;font-weight:bold;color:#0284c7">⏱️ CONTROL</div>`;
  html += `</div>`;
  html += `<div style="display:flex;gap:12px;margin-bottom:16px;">`;
  html += `<div style="background:#f1f5f9;padding:12px;border-radius:8px;flex:1"><span style="font-size:11px;color:#64748b">TOTAL HORAS EXTRAS</span><br><b style="font-size:18px;color:#0284c7">${document.getElementById('statTotal').innerText}</b></div>`;
  html += `<div style="background:#f1f5f9;padding:12px;border-radius:8px;flex:1"><span style="font-size:11px;color:#64748b">TRABAJADORES ACTIVOS</span><br><b style="font-size:18px">${document.getElementById('statWorkers').innerText}</b></div>`;
  html += `<div style="background:#f1f5f9;padding:12px;border-radius:8px;flex:1"><span style="font-size:11px;color:#64748b">TOTAL COBERTURAS</span><br><b style="font-size:18px">${document.getElementById('statCoverages').innerText}</b></div>`;
  html += `</div>`;
  html += `<table style="width:100%;border-collapse:collapse;font-size:11px;margin-top:10px" border="1" borderColor="#cbd5e1" cellpadding="6">`;
  html += `<thead style="background:#0284c7;color:#ffffff"><tr><th style="padding:8px">Trabajador (Sustituto)</th><th style="padding:8px">Fecha</th><th style="padding:8px">Unidad</th><th style="padding:8px">A Quien Cubre</th><th style="padding:8px">Horas</th><th style="padding:8px">Motivo / Nota</th></tr></thead><tbody>`;
  records.forEach(r => {
    html += `<tr><td style="padding:6px;font-weight:bold">${escHtml(r.worker)}</td><td style="padding:6px">${escHtml(r.date)}</td><td style="padding:6px">${escHtml(r.unit.split(' - ')[0])}</td><td style="padding:6px">${escHtml(r.covering)}</td><td style="padding:6px;font-weight:bold;color:#0284c7">+${r.hours}h</td><td style="padding:6px">${escHtml(r.reason)}</td></tr>`;
  });
  html += `</tbody></table>`;
  pdfDiv.innerHTML = html;
  const opt = {
    margin: 8,
    filename: `Informe_Horas_Extras_${new Date().toISOString().slice(0,10)}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
  };
  closeModal('emailPDFModal');
  try {
    await loadHtml2pdf();
  } catch(e) {
    showToastMsg('No se pudo cargar html2pdf.', 'error');
    return;
  }
  generatePDF(opt, pdfDiv, to, subject);
}

async function generatePDF(opt, pdfDiv, to, subject) {
  const pdfWorker = html2pdf().set(opt).from(pdfDiv);
  if (navigator.canShare) {
    try {
      const pdfBlob = await pdfWorker.output('blob');
      const file = new File([pdfBlob], opt.filename, { type: 'application/pdf' });
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'Informe de Horas Extras y Coberturas PDF',
          text: `Adjunto informe oficial de horas extras (${document.getElementById('statTotal').innerText}).`
        });
        return;
      }
    } catch (err) { console.log('Web share skipped', err); }
  }
  pdfWorker.save();
  const mailtoBody = encodeURIComponent(`Hola,\n\nTe adjunto el informe oficial en PDF "${opt.filename}" recién descargado en el dispositivo.\n\nResumen:\n- Total Horas Extras: ${document.getElementById('statTotal').innerText}\n- Trabajadores Activos: ${document.getElementById('statWorkers').innerText}\n\nUn saludo.`);
  const mailtoUrl = `mailto:${to}?subject=${subject}&body=${mailtoBody}`;
  setTimeout(() => { window.location.href = mailtoUrl; }, 600);
}

function printReport() { window.print(); }

// ========================
// Backup system
// ========================
let backupInterval = null;

function initAutoBackup() {
  createBackup();
  backupInterval = setInterval(createBackup, 5 * 60 * 1000);
  updateBackupStatus();
}

function createBackup() {
  const data = { records, units: getUnits(), savedAt: new Date().toISOString() };
  localStorage.setItem(BACKUP_KEY, JSON.stringify(data));
  updateBackupStatus();
}

function restoreBackup() {
  const raw = localStorage.getItem(BACKUP_KEY);
  if (!raw) { showToastMsg('No hay backup disponible.', 'warning'); return; }
  try {
    const data = JSON.parse(raw);
    const count = data.records ? data.records.length : 0;
    if (!window.confirm(`Restaurar backup del ${new Date(data.savedAt).toLocaleString('es-ES')} con ${count} registros? Esto reemplazará los datos actuales.`)) return;
    if (data.records) { records = data.records; saveRecords(); }
    if (data.units) saveUnits(data.units);
    render();
    showToastMsg('Backup restaurado.', 'success');
  } catch(e) { showToastMsg('Error al restaurar el backup.', 'error'); }
}

function updateBackupStatus() {
  const el = document.getElementById('backupStatus');
  if (!el) return;
  const raw = localStorage.getItem(BACKUP_KEY);
  if (!raw) { el.innerHTML = ''; return; }
  try {
    const data = JSON.parse(raw);
    const savedAt = new Date(data.savedAt);
    const diffMin = Math.round((Date.now() - savedAt.getTime()) / 60000);
    el.innerHTML = `💾 Backup: hace ${diffMin}min`;
    el.className = 'backup-status ' + (diffMin < 10 ? 'backup-ok' : 'backup-warn');
  } catch(e) { el.innerHTML = ''; }
}

// ========================
// PWA install
// ========================
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const btnMenu = document.getElementById('installMenuBtn');
  if (btnMenu) btnMenu.style.display = 'block';
  const btnBottom = document.getElementById('bottomInstallBtn');
  if (btnBottom) btnBottom.style.display = 'flex';
});

function installPWA() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        const btnMenu = document.getElementById('installMenuBtn');
        if (btnMenu) btnMenu.style.display = 'none';
        const btnBottom = document.getElementById('bottomInstallBtn');
        if (btnBottom) btnBottom.style.display = 'none';
      }
      deferredPrompt = null;
    });
  }
}

// ========================
// Event delegation (CSP-safe, no inline onclick)
// ========================

const actionHandlers = {
  'toggle-dropdown': (el) => toggleDropdown(el.dataset.target),
  'toggle-more-menu': (el) => {
    const menu = document.getElementById('bottomNavMore');
    menu.classList.toggle('show');
    el.setAttribute('aria-expanded', menu.classList.contains('show') ? 'true' : 'false');
  },
  'open-record-modal': () => openRecordModal(),
  'open-charts': () => openChartsModal(),
  'open-calendar': () => openCalendarModal(),
  'open-worker-summary': () => openWorkerSummaryModal(),
  'open-workers': () => openWorkersModal(),
  'open-email-pdf': () => openEmailPDFModal(),
  'toggle-theme': () => toggleTheme(),
  'clear-all-records': () => clearAllRecords(),
  'export-excel': () => exportExcel(),
  'export-csv': () => exportCSV(),
  'export-json': () => exportJSON(),
  'import-json': () => document.getElementById('importJSONInput').click(),
  'json-file-selected': (el) => importJSON(),
  'print-report': () => printReport(),
  'share-whatsapp': () => shareWhatsApp(),
  'create-backup': () => { createBackup(); showToastMsg('Backup creado.', 'success'); },
  'restore-backup': () => restoreBackup(),
  'install-pwa': () => installPWA(),
  'scroll-top': () => window.scrollTo({ top: 0, behavior: 'smooth' }),
  'edit-record': (el) => editRecord(parseInt(el.dataset.recordId, 10)),
  'delete-record': (el) => deleteRecord(parseInt(el.dataset.recordId, 10)),
  'sort-table': (el) => sortTable(el.dataset.column),
  'filter-stat': (el) => filterByStat(el.dataset.stat),
  'edit-unit': () => editUnit(),
  'add-new-worker': () => addNewWorker(),
  'delete-unit': () => deleteUnit(),
  'add-custom-unit': () => addCustomUnit(),
  'remove-worker': (el) => { removeWorker(parseInt(el.dataset.unitIdx, 10), parseInt(el.dataset.workerIdx, 10)); renderWorkersList(); },
  'export-worker-summary-excel': () => exportWorkerSummaryExcel(),
  'generate-pdf': () => generateAndSendPDF(),
};

function dispatchAction(e, target) {
  const action = target.dataset.action;
  if (!action) return;
  const handler = actionHandlers[action];
  if (handler) {
    e.preventDefault();
    handler(target);
  }
}

document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-action]');
  if (!target) return;
  dispatchAction(e, target);
});

document.addEventListener('change', (e) => {
  const target = e.target.closest('[data-action]');
  if (!target) return;
  dispatchAction(e, target);
});

document.addEventListener('input', (e) => {
  const id = e.target.id;
  if (id === 'searchInput' || id === 'monthFilter' || id === 'unitFilter' || id === 'summaryMonthFilter' || id === 'manageUnitSelect') {
    if (id === 'manageUnitSelect') renderWorkersList();
    else { currentPage = 1; renderWorkerSummary(); if (id !== 'summaryMonthFilter') render(); }
  }
});

document.addEventListener('submit', (e) => {
  if (e.target.id === 'recordForm') {
    e.preventDefault();
    saveRecord();
  }
});

document.addEventListener('click', (e) => {
  if (e.target.matches('[data-modal-close]') || e.target.closest('[data-modal-close]')) {
    const btn = e.target.matches('[data-modal-close]') ? e.target : e.target.closest('[data-modal-close]');
    closeModal(btn.dataset.modalClose);
  }
});

document.addEventListener('click', (e) => {
  const presetBtn = e.target.closest('[data-preset-unit]');
  if (presetBtn) {
    e.preventDefault();
    addPresetUnit(presetBtn.dataset.presetUnit);
  }
});

document.addEventListener('click', (e) => {
  const reasonBtn = e.target.closest('[data-reason]');
  if (reasonBtn) {
    e.preventDefault();
    setReason(reasonBtn.dataset.reason);
  }
});

document.addEventListener('click', (e) => {
  if (e.target.matches('.toast-close') || e.target.closest('.toast-close')) {
    const toast = document.getElementById('toast');
    if (toast) toast.classList.remove('show');
  }
});

document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-page]');
  if (btn) { e.preventDefault(); goToPage(btn.dataset.page); }
});

document.addEventListener('click', (e) => {
  const navBtn = e.target.closest('[data-cal-nav]');
  if (navBtn) { e.preventDefault(); changeCalMonth(parseInt(navBtn.dataset.calNav, 10)); }
});

document.addEventListener('click', (e) => {
  const dayBtn = e.target.closest('[data-cal-day]');
  if (dayBtn) {
    e.preventDefault();
    showCalDayDetail(calendarYear, calendarMonth, parseInt(dayBtn.dataset.calDay, 10));
  }
});

// Close "More" menu on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest('.bottom-nav-more-menu') && !e.target.closest('[data-action="toggle-more-menu"]')) {
    const menu = document.getElementById('bottomNavMore');
    if (menu && menu.classList.contains('show')) {
      menu.classList.remove('show');
      const trigger = document.querySelector('[data-action="toggle-more-menu"]');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    }
  }
  if (!e.target.closest('.dropdown')) closeAllDropdowns();
});

// Chart.js lazy-load (for monthly trend chart)
let chartJSPromise = null;
function loadChartJS() {
  if (typeof Chart !== 'undefined') return Promise.resolve();
  if (!chartJSPromise) {
    chartJSPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.6/dist/chart.umd.min.js';
      s.onload = () => resolve();
      s.onerror = () => { chartJSPromise = null; reject(new Error('chart.js load failed')); };
      document.head.appendChild(s);
    });
  }
  return chartJSPromise;
}

let monthlyChartInstance = null;
async function renderMonthlyChart() {
  try {
    await loadChartJS();
  } catch (e) { return; }
  const ctx = document.getElementById('monthlyChartCanvas');
  if (!ctx) return;
  const months = [];
  const totals = [];
  const now = new Date();
  const monthsEs = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthNum = d.getMonth() + 1;
    const year = d.getFullYear();
    const total = records.reduce((sum, r) => {
      const parts = r.date.split('/');
      if (parts.length === 3 && parseInt(parts[1]) === monthNum && parseInt(parts[2]) === year) {
        return sum + r.hours;
      }
      return sum;
    }, 0);
    months.push(`${monthsEs[d.getMonth()]} ${String(year).slice(2)}`);
    totals.push(total);
  }
  if (monthlyChartInstance) monthlyChartInstance.destroy();
  const isDark = !document.body.classList.contains('light-mode');
  monthlyChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: 'Horas extras',
        data: totals,
        borderColor: '#38bdf8',
        backgroundColor: isDark ? 'rgba(56,189,248,0.15)' : 'rgba(2,132,199,0.15)',
        tension: 0.3,
        fill: true,
        pointBackgroundColor: '#38bdf8',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: isDark ? '#1e293b' : '#fff',
          titleColor: isDark ? '#f8fafc' : '#0f172a',
          bodyColor: isDark ? '#f8fafc' : '#0f172a',
          borderColor: 'rgba(56,189,248,0.3)',
          borderWidth: 1,
          padding: 10,
          displayColors: false,
          callbacks: { label: (ctx) => `+${ctx.parsed.y}h` }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: isDark ? '#94a3b8' : '#64748b', callback: (v) => v + 'h' },
          grid: { color: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }
        },
        x: {
          ticks: { color: isDark ? '#94a3b8' : '#64748b' },
          grid: { display: false }
        }
      }
    }
  });
}

// ========================
// Service worker registration
// ========================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => {
        console.log('SW registrado:', reg.scope);
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              showToastMsg('Nueva versión disponible. Pulsa para actualizar.', 'info');
              newWorker.postMessage({ action: 'SKIP_WAITING' });
              setTimeout(() => location.reload(), 2000);
            }
          });
        });
      })
      .catch(err => console.log('SW registration error:', err));
    navigator.serviceWorker.addEventListener('controllerchange', () => location.reload());
  });
}

// ========================
// Init
// ========================
document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  initDatalists();
  initMonthFilter();
  initUnitFilter();
  render();
  initAutoBackup();
});
