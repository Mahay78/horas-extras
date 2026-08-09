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
let coverageOnlyFilter = false;

let lastEditTime = null;

// ========================
// Storage helpers
// ========================
function loadRecords() {
  try {
    const r = localStorage.getItem(STORAGE_KEY);
    if (r) return JSON.parse(r).map(normalizeRecord);
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
      populateAllWorkersDatalists();
    }
  }
}

function removeWorker(unitIdx, workerIdx) {
  const units = getUnits();
  if (units[unitIdx] && units[unitIdx].workers[workerIdx]) {
    units[unitIdx].workers.splice(workerIdx, 1);
    saveUnits(units);
    populateAllWorkersDatalists();
  }
}

function addUnit(unitName) {
  const units = getUnits();
  const upper = unitName.trim().toUpperCase();
  if (!upper) return false;
  if (units.some(u => u.unit === upper)) { showToastMsg('Esa unidad ya existe.', 'warning'); return false; }
  units.push({ unit: upper, workers: [] });
  saveUnits(units);
  populateAllWorkersDatalists();
  return true;
}

function removeUnit(unitIdx) {
  const units = getUnits();
  if (!units[unitIdx]) return;
  if (!window.confirm(`¿Eliminar la unidad "${units[unitIdx].unit}"? Se borrarán todos sus trabajadores.`)) return;
  units.splice(unitIdx, 1);
  saveUnits(units);
  populateAllWorkersDatalists();
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
// Data helpers
// ========================
function todayLocalISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function normalizeRecord(r) {
  r = r || {};
  return {
    id: r.id != null ? r.id : Date.now() + Math.floor(Math.random() * 1000),
    worker: r.worker != null ? String(r.worker) : 'SIN NOMBRE',
    unit: r.unit != null ? String(r.unit) : '',
    date: r.date != null ? String(r.date) : '',
    hours: parseFloat(r.hours) || 0,
    covering: r.covering != null ? String(r.covering) : 'N/A (Extra Directa)',
    reason: r.reason != null ? String(r.reason) : 'Horas extras asignadas',
    shift: r.shift != null ? String(r.shift) : '',
    createdAt: r.createdAt != null ? String(r.createdAt) : new Date().toLocaleString('es-ES')
  };
}

// ========================
// Shift inference (turno día / noche)
// ========================
function parseUnitWindow(unitName) {
  // Looks for "HHh A HHh" patterns in unit name, returns [startHour, endHour]
  // Covers "DE 09H A 09H", "07H A 19H", etc.
  const m = String(unitName || '').toUpperCase().match(/(\d{1,2})\s*H\s*A\s*(\d{1,2})\s*H/i);
  if (!m) return null;
  const start = parseInt(m[1], 10);
  const end = parseInt(m[2], 10);
  if (Number.isNaN(start) || Number.isNaN(end)) return null;
  return { start, end };
}

function inferShift(unitName, hours, explicitShift) {
  if (explicitShift) return explicitShift;
  const u = String(unitName || '').toUpperCase();
  // Explicit 24h shift markers
  if (u.includes('24H')) return '24';
  const w = parseUnitWindow(unitName);
  if (!w) return '';
  if (w.start === w.end) return '24';
  const forwardSpan = (w.end - w.start + 24) % 24;
  const crossesNoche = w.start < 6 || w.start >= 21 || w.end > 20 || w.end <= 5;
  if (forwardSpan <= 12 && !crossesNoche) return 'dia';
  if (forwardSpan <= 12 && crossesNoche) return 'noche';
  return forwardSpan >= 20 ? '24' : 'dia';
}

function shiftLabel(s) {
  if (s === 'dia') return '☀️ Día';
  if (s === 'noche') return '🌙 Noche';
  if (s === '24') return '🕓 24h';
  return '';
}

function shiftRowClass(s) {
  if (s === 'noche') return 'td-shift-noche';
  if (s === 'dia') return 'td-shift-dia';
  if (s === '24') return 'td-shift-24';
  return '';
}

function shiftBadgeHtml(s) {
  if (!s) return '';
  if (s === 'dia') return '<span class="shift-badge dia">☀️ Día</span>';
  if (s === 'noche') return '<span class="shift-badge noche">🌙 Noche</span>';
  if (s === '24') return '<span class="shift-badge full-24">🕓 24h</span>';
  return '';
}

function computeTotals(list) {
  let totalHours = 0;
  const workers = new Set();
  let covers = 0;
  (list || []).forEach(r => {
    if (!r) return;
    totalHours += parseFloat(r.hours) || 0;
    if (r.worker) workers.add(r.worker);
    if (r.covering && !r.covering.includes('N/A')) covers++;
  });
  return { totalHours, workers: workers.size, covers };
}

// ========================
// Toast notifications
// ========================
function showToastMsg(msg, type = 'info', opts = {}) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
  }
  const icons = { info: 'ℹ️', success: '✅', warning: '⚠️', error: '❌' };
  const action = opts.action ? `<button data-toast-action aria-label="${escHtml(opts.actionLabel || 'Acción')}">${escHtml(opts.actionLabel || 'Acción')}</button>` : '';
  toast.innerHTML = `<span>${icons[type] || 'ℹ️'} ${escHtml(msg)}</span>${action}<button class="toast-close" aria-label="Cerrar">✕</button>`;
  toast.classList.add('show');
  if (opts.action && typeof opts.onAction === 'function') {
    toast.querySelector('[data-toast-action]').addEventListener('click', () => {
      try { opts.onAction(); } finally {
        toast.classList.remove('show');
        if (navigator.vibrate) navigator.vibrate(15);
      }
    });
  }
  const ttl = opts.duration || 4000;
  setTimeout(() => toast.classList.remove('show'), ttl);
}

function haptic(pattern = 15) {
  if (navigator.vibrate) {
    try { navigator.vibrate(pattern); } catch (e) {}
  }
}

// ========================
// Theme + Preferences
// ========================
const PREF_KEY = 'horas_extras_prefs_v1';
const FAB_POS_KEY = 'horas_extras_fab_pos';
const FS_KEY = 'horas_extras_font_size';
const deferredToasts = [];
function toastOpts() { return { ...deferredToasts.pop() }; }

function loadPrefs() {
  try { return JSON.parse(localStorage.getItem(PREF_KEY) || '{}'); }
  catch (e) { return {}; }
}
function savePrefs(p) { localStorage.setItem(PREF_KEY, JSON.stringify(p || {})); }

function getThemePref() {
  const p = loadPrefs();
  return p.theme || localStorage.getItem(THEME_KEY) || 'auto';
}
function setThemePref(value) {
  const p = loadPrefs(); p.theme = value; savePrefs(p);
  applyTheme();
}
function applyTheme() {
  const pref = getThemePref();
  let effective;
  if (pref === 'auto') {
    effective = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  } else {
    effective = pref;
  }
  document.body.classList.toggle('light-mode', effective === 'light');
  const btn = document.getElementById('themeBtn');
  if (btn) {
    btn.innerText = pref === 'auto' ? '🌓' : (effective === 'light' ? '☀️' : '🌙');
    btn.title = `Tema: ${pref}`;
  }
}
function toggleTheme() {
  const cur = getThemePref();
  // Cycle: dark → light → auto → dark
  const next = cur === 'dark' ? 'light' : cur === 'light' ? 'auto' : 'dark';
  setThemePref(next);
  showToastMsg(`Tema: ${next}`, 'info');
}
function loadTheme() { applyTheme(); }

if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
    if (getThemePref() === 'auto') applyTheme();
  });
}

function applyFabPosition() {
  const v = localStorage.getItem(FAB_POS_KEY) || 'right';
  document.documentElement.dataset.fab = v;
}
function setFabPosition(v) {
  localStorage.setItem(FAB_POS_KEY, v);
  applyFabPosition();
  showToastMsg('Posición FAB: ' + (v === 'right' ? 'derecha' : v === 'left' ? 'izquierda' : 'centro'), 'success');
}

function applyFontSize() {
  const v = localStorage.getItem(FS_KEY) || 'md';
  document.documentElement.dataset.fs = v === 'md' ? '' : v;
  document.documentElement.removeAttribute('data-fs');
  if (v !== 'md') document.documentElement.setAttribute('data-fs', v);
}
function setFontSize(v) {
  localStorage.setItem(FS_KEY, v);
  applyFontSize();
}

// ========================
// Feature flag: Vista Vehículos (experimental)
// ========================
function getVehiculosEnabled() {
  const p = loadPrefs();
  return !!p.vehiculos;
}
function setVehiculosEnabled(v) {
  const p = loadPrefs();
  p.vehiculos = !!v;
  savePrefs(p);
  applyVehiculosVisibility();
  haptic(15);
}
function applyVehiculosVisibility() {
  const on = getVehiculosEnabled();
  const btn = document.getElementById('vehiculosHeaderBtn');
  if (btn) btn.style.display = on ? 'flex' : 'none';
  const menuBtn = document.getElementById('toggleVehiculosBtn');
  if (menuBtn) menuBtn.innerText = on ? '🚑 Vista vehículos (on)' : '🚑 Vista vehículos (off)';
}
function toggleVehiculos() {
  setVehiculosEnabled(!getVehiculosEnabled());
  showToastMsg(getVehiculosEnabled() ? 'Vista vehículos activada' : 'Vista vehículos desactivada', 'info');
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
  if (modal._focusTrapHandler) {
    modal.removeEventListener('keydown', modal._focusTrapHandler);
    delete modal._focusTrapHandler;
  }
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
  const handler = (e) => {
    if (e.key !== 'Tab') return;
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };
  modal._focusTrapHandler = handler;
  modal.addEventListener('keydown', handler);
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
    const openModals = document.querySelectorAll('.modal.open');
    if (openModals.length > 0) closeModal(openModals[openModals.length - 1].id);
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
  currentPage = 1;
  updateSortIndicators();
  render();
}

function updateSortIndicators() {
  document.querySelectorAll('th.sortable').forEach(th => {
    const col = th.dataset.column;
    th.classList.remove('sorted-asc', 'sorted-desc');
    if (col === sortState.column) {
      const ascending = sortState.direction === 'asc';
      th.classList.add(ascending ? 'sorted-asc' : 'sorted-desc');
      th.setAttribute('aria-sort', ascending ? 'ascending' : 'descending');
    } else {
      th.setAttribute('aria-sort', 'none');
    }
  });
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
  populateAllWorkersDatalists();
}

function populateAllWorkersDatalists() {
  // Collect every worker across every unit, deduplicated, sorted.
  const seen = new Set();
  const all = [];
  getUnits().forEach(u => {
    (u.workers || []).forEach(w => {
      const norm = w.trim().toUpperCase();
      if (!norm) return;
      if (!seen.has(norm)) { seen.add(norm); all.push(w); }
    });
  });
  all.sort((a, b) => a.localeCompare(b, 'es-ES'));
  const ids = ['allWorkersDatalist', 'coverageDatalist'];
  ids.forEach(id => {
    const dl = document.getElementById(id);
    if (!dl) return;
    dl.innerHTML = '';
    all.forEach(w => {
      const opt = document.createElement('option');
      opt.value = w;
      dl.appendChild(opt);
    });
  });
}

function filterWorkersByUnit() {
  // Kept for backwards compatibility: no longer restricts the datalist.
  // Worker and cover fields always show the full global pool.
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
  document.getElementById('recDate').value = todayLocalISO();
  filterWorkersByUnit();
  updateShiftUi();
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
      document.getElementById('recDate').value = todayLocalISO();
    }
  }
  updateShiftUi(r.shift || null);
  openModal('recordModal');
}

function updateShiftUi(explicitShift, opts = {}) {
  const unit = document.getElementById('recUnit')?.value || '';
  const hours = parseFloat(document.getElementById('recHours')?.value) || 0;
  // If opts.keepExplicit is true (user clicked a chip), reuse it; else re-derive.
  let shift;
  if (opts.keepExplicit && explicitShift) {
    shift = explicitShift;
  } else if (explicitShift) {
    shift = explicitShift;
  } else {
    shift = inferShift(unit, hours, '');
  }
  document.querySelectorAll('.shift-btn').forEach(b => b.classList.toggle('active', b.dataset.shift === shift));
  const hidden = document.getElementById('recShift');
  if (hidden && shift) hidden.value = shift;
  const group = document.getElementById('shiftGroup');
  if (group) group.style.display = unit ? '' : 'none';
  const summary = document.getElementById('shiftSummary');
  const splitHint = document.getElementById('shiftSplitHint');
  if (summary) {
    const w = parseUnitWindow(unit);
    if (w) {
      const spanTxt = w.start === w.end ? '24h' : Math.abs(w.end - w.start) + 'h';
      const parts = [`Ventana unidad: ${String(w.start).padStart(2,'0')}:00 – ${String(w.end).padStart(2,'0')}:00 (${spanTxt}). Inferido: ${shiftLabel(shift) || '—'}`];
      // 24h guard with 12h turn tip
      if (w.start === w.end && hours > 0 && hours < 24 && shift !== '24') {
        parts.push('Esta guardia 24h se cubre entre dos turnos; marca Día o Noche explícitamente.');
      }
      summary.textContent = parts.join(' ');
      if (splitHint) splitHint.style.display = (w.start === w.end && hours > 0 && hours < 24) ? '' : 'none';
    } else if (unit) {
      summary.textContent = 'Sin horario definido.';
      if (splitHint) splitHint.style.display = 'none';
    } else {
      summary.textContent = '';
      if (splitHint) splitHint.style.display = 'none';
    }
  }
}

function bindShiftToggle() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-shift]');
    if (!btn) return;
    document.getElementById('recShift').value = btn.dataset.shift;
    updateShiftUi(btn.dataset.shift, { keepExplicit: true });
    haptic(8);
  });
  // When unit or hours change, reset to inferred shift
  const onUnitOrHours = () => {
    document.getElementById('recShift').value = '';
    updateShiftUi();
  };
  document.addEventListener('change', (e) => {
    if (e.target.id === 'recUnit' || e.target.id === 'recHours') onUnitOrHours();
  });
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
  const shift = document.getElementById('recShift')?.value || inferShift(unit, hours, '');

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
      records[idx].shift = shift;
    }
  } else {
    records.unshift({
      id: Date.now(),
      worker, unit, date: formattedDate, hours,
      covering: covering || 'N/A (Extra Directa)',
      reason: reason || 'Horas extras asignadas',
      shift,
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

function deleteRecord(id, opts = {}) {
  if (!opts.skipConfirm && !window.confirm('¿Eliminar este registro de horas extras?')) return;
  const idx = records.findIndex(r => r.id === id);
  if (idx === -1) return;
  const removed = records[idx];
  records.splice(idx, 1);
  saveRecords();
  markEdited();
  render();
  haptic(20);
  if (opts.silent) {
    showToastMsg('Registro eliminado.', 'success');
    return;
  }
  showToastMsg('Registro eliminado.', 'success', {
    duration: 5000,
    actionLabel: 'Deshacer',
    onAction: () => {
      records.splice(idx, 0, removed);
      saveRecords();
      markEdited();
      render();
      haptic(15);
      showToastMsg('Registro restaurado.', 'info');
    }
  });
}

function clearAllRecords() {
  if (records.length === 0) return;
  if (!window.confirm('¿Seguro que deseas vaciar toda la lista?')) return;
  const typed = window.prompt('Escribe VACIAR para confirmar (se puede Deshacer)');
  if ((typed || '').trim().toUpperCase() !== 'VACIAR') {
    showToastMsg('Cancelado.', 'info');
    return;
  }
  const backup = records.slice();
  records = [];
  saveRecords();
  markEdited();
  render();
  haptic([20, 30, 20]);
  showToastMsg('Lista vaciada.', 'warning', {
    duration: 7000,
    actionLabel: 'Deshacer',
    onAction: () => {
      records = backup;
      saveRecords();
      markEdited();
      render();
      haptic(15);
      showToastMsg('Lista restaurada.', 'info');
    }
  });
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
    const [, year, month] = monthFilter.split('_');
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
  if (coverageOnlyFilter) {
    filtered = filtered.filter(r => r.covering && !r.covering.includes('N/A'));
  }
  if (query) {
    filtered = filtered.filter(r =>
      (r.worker || '').toLowerCase().includes(query) ||
      (r.unit || '').toLowerCase().includes(query) ||
      (r.covering || '').toLowerCase().includes(query) ||
      (r.reason || '').toLowerCase().includes(query) ||
      (r.date || '').includes(query)
    );
  }
  filtered = applySort(filtered);

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
      const hrs = parseFloat(r.hours) || 0;
      const hrsLabel = hrs > 0 ? `+${hrs}h` : '—';
      const isCovering = r.covering && !r.covering.includes('N/A');
      const coveringLabel = isCovering ? `🔄 ${escHtml(r.covering)}` : '⚡ Extra Directa';
      const unitShort = escHtml((r.unit || '').split(' - ')[0]);
      const shift = r.shift || inferShift(r.unit, parseFloat(r.hours) || 0, '');
      tr.dataset.recordId = r.id;
      tr.dataset.longPress = 'record';
      tr.classList.add(shiftRowClass(shift));
      tr.dataset.shift = shift;
      tr.innerHTML = `
        <td class="td-worker">
          <span>${escHtml(r.worker)}</span>
          ${shift ? `<span class="shift-badge ${shift === 'noche' ? 'noche' : shift === 'dia' ? 'dia' : 'full-24'}">${shiftLabel(shift)}</span>` : ''}
        </td>
        <td class="td-headline">
          <span class="badge badge-hours">${hrsLabel}</span>
          <span class="badge ${isCovering ? 'badge-covered' : 'badge-direct'}">${coveringLabel}</span>
        </td>
        <td class="td-meta">
          <span>📅 ${escHtml(r.date)}</span>
          <span>· ${unitShort}</span>
        </td>
        <td class="td-reason" style="color:var(--muted);font-size:12px;padding:4px 0;">
          ${escHtml((r.reason || '').slice(0, 120))}${(r.reason || '').length > 120 ? '…' : ''}
        </td>
        <td class="td-actions">
          <button class="btn btn-sm" data-action="edit-record" data-record-id="${r.id}" aria-label="Editar registro">✏️ Editar</button>
          <button class="btn btn-sm btn-danger" data-action="delete-record" data-record-id="${r.id}" aria-label="Borrar registro">🗑 Borrar</button>
        </td>`;
      tbody.appendChild(tr);
    });
    renderPagination(filtered.length, totalPages);
  }

  let totalHours = 0;
  const workerTotals = {};
  let coverCount = 0;
  filtered.forEach(r => {
    const h = parseFloat(r.hours) || 0;
    totalHours += h;
    workerTotals[r.worker] = (workerTotals[r.worker] || 0) + h;
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
  updateSortIndicators();
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
    coverageOnlyFilter = false;
    document.getElementById('monthFilter').value = 'all';
    document.getElementById('unitFilter').value = 'all';
    document.getElementById('searchInput').value = '';
    currentPage = 1;
    render();
    showToastMsg('Mostrando todos los registros.', 'info');
  } else if (type === 'workers') {
    openWorkerSummaryModal();
  } else if (type === 'coverages') {
    coverageOnlyFilter = true;
    document.getElementById('searchInput').value = '';
    currentPage = 1;
    render();
    showToastMsg('Mostrando solo coberturas.', 'info');
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
    if (!r) return;
    const uName = (r.unit || '').split(' - ')[0];
    const h = parseFloat(r.hours) || 0;
    unitTotals[uName] = (unitTotals[uName] || 0) + h;
    if (unitTotals[uName] > maxUnitHours) maxUnitHours = unitTotals[uName];
    const rName = (r.reason || '').split('/')[0].trim();
    reasonTotals[rName] = (reasonTotals[rName] || 0) + h;
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
  const monthKeyBase = `${calendarYear}-${String(calendarMonth+1).padStart(2,'0')}-`;
  const dayMap = {};   // key -> { records: [], hours: 0, shifts: Set, workers: Set }
  let monthHours = 0;
  const monthWorkers = new Set();
  let monthCover = 0;
  records.forEach(r => {
    const parts = r.date.split('/');
    if (parts.length !== 3) return;
    const key = `${parts[2]}-${parts[1].padStart(2,'0')}-${parts[0].padStart(2,'0')}`;
    if (!key.startsWith(monthKeyBase)) return;
    const hrs = parseFloat(r.hours) || 0;
    const shift = r.shift || inferShift(r.unit, hrs, '');
    if (!dayMap[key]) dayMap[key] = { records: [], hours: 0, shifts: new Set(), workers: new Set() };
    dayMap[key].records.push(r);
    dayMap[key].hours += hrs;
    if (shift) dayMap[key].shifts.add(shift);
    if (r.worker) dayMap[key].workers.add(r.worker);
    monthHours += hrs;
    if (r.worker) monthWorkers.add(r.worker);
    if (r.covering && !String(r.covering).includes('N/A')) monthCover++;
  });

  // Month summary
  const monthStatsEl = document.getElementById('calendarMonthStats');
  if (monthStatsEl) {
    const dayCount = Object.keys(dayMap).length;
    monthStatsEl.innerHTML = `🧮 <b>${monthHours}h</b> en mes · <b>${dayCount}</b> días con extras · <b>${monthWorkers.size}</b> trabajadores · <b>${monthCover}</b> coberturas`;
  }

  const headerLabel = document.getElementById('calHeaderLabel');
  if (headerLabel) headerLabel.textContent = `${months[calendarMonth]} ${calendarYear}`;

  const today = new Date();
  const todayKey = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;

  let html = `<div class="calendar-grid">`;
  days.forEach(d => { html += `<div class="calendar-day-header">${d}</div>`; });
  const firstDay = new Date(calendarYear, calendarMonth, 1);
  let startDay = firstDay.getDay() - 1;
  if (startDay < 0) startDay = 6;
  const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
  for (let i = 0; i < startDay; i++) html += `<div></div>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const key = `${calendarYear}-${String(calendarMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const info = dayMap[key];
    const isToday = key === todayKey;
    const classes = ['calendar-day'];
    if (isToday) classes.push('today');
    if (info) {
      classes.push('has-records');
      const h = info.hours;
      if (h >= 36) classes.push('intensity-high');
      else if (h >= 18) classes.push('intensity-mid');
      else classes.push('intensity-low');
    }
    const count = info ? info.records.length : 0;
    const htmlHours = info ? `<div class="cal-day-hours">+${info.hours}h</div>` : '';
    const htmlCount = info && count > 1 ? `<div class="cal-day-count">${count} reg.</div>` : '';
    html += `<div class="${classes.join(' ')}" data-cal-day="${d}" role="button" tabindex="0" aria-label="${d} de ${months[calendarMonth]}, ${count} registros, ${info ? info.hours : 0} horas">
      <div class="cal-day-num">${d}</div>
      ${htmlHours}
      ${htmlCount}
    </div>`;
  }
  html += `</div>`;

  // Legend
  const legendEl = document.getElementById('calendarLegend');
  if (legendEl) {
    legendEl.innerHTML = `
      <span class="cal-legend-item"><span class="cal-dot today"></span> Hoy</span>
      <span class="cal-legend-item"><span class="cal-dot low"></span> &lt;18h</span>
      <span class="cal-legend-item"><span class="cal-dot mid"></span> 18-36h</span>
      <span class="cal-legend-item"><span class="cal-dot high"></span> &gt;36h</span>`;
  }

  // Day detail: reset to nothing when changing month
  html += `<div id="calDayDetail" class="cal-day-detail" style="display:none;"></div>`;
  container.innerHTML = html;
}

function changeCalMonth(delta) {
  calendarMonth += delta;
  if (calendarMonth > 11) { calendarMonth = 0; calendarYear++; }
  if (calendarMonth < 0) { calendarMonth = 11; calendarYear--; }
  calendarSelectedDay = null;
  renderCalendar();
}

let calendarSelectedDay = null;

function showCalDayDetail(year, month, day) {
  calendarSelectedDay = { year, month, day };
  const dateStr = `${String(day).padStart(2,'0')}/${String(month+1).padStart(2,'0')}/${year}`;
  const dayRecords = records.filter(r => r.date === dateStr);
  const detail = document.getElementById('calDayDetail');
  if (!detail) return;
  detail.style.display = '';
  if (dayRecords.length === 0) {
    detail.innerHTML = `<div class="cal-dd-header">📅 ${dateStr}</div><div style="padding:12px;text-align:center;color:var(--muted);font-size:13px;">Sin registros aún. ¿Añades el primer cubreturno?</div>`;
    return;
  }
  const totalH = dayRecords.reduce((s, r) => s + (parseFloat(r.hours) || 0), 0);
  const group = { dia: [], noche: [], '24': [], '': [] };
  dayRecords.forEach(r => {
    const hrs = parseFloat(r.hours) || 0;
    const shift = r.shift || inferShift(r.unit, hrs, '');
    group[(group[shift] ? shift : '')].push(r);
  });
  let html = `<div class="cal-dd-header">📅 ${dateStr} — ${dayRecords.length} registros · +${totalH}h</div>`;
  const renderRow = (arr, label, icon) => {
    if (!arr.length) return '';
    return arr.map(r => `
      <div class="cal-dd-row">
        <span>${icon}</span>
        <b>${escHtml(r.worker)}</b>
        <span class="badge badge-hours">+${parseFloat(r.hours) || 0}h</span>
        ${r.covering && !String(r.covering).includes('N/A') ? `<span class="badge badge-covered">🔄 ${escHtml(r.covering)}</span>` : ''}
        <span style="color:var(--muted);font-size:11px;">· ${escHtml((r.unit || '').split(' - ')[0])}</span>
      </div>`).join('');
  };
  html += renderRow(group.dia, 'Día', '☀️');
  html += renderRow(group.noche, 'Noche', '🌙');
  html += renderRow(group['24'], '24h', '🕓');
  html += renderRow(group[''], 'Otros', '—');

  // Detect if this day has a 24h unit with room for unbundled turn
  const units24 = new Set();
  dayRecords.forEach(r => {
    const u = r.unit || '';
    if (/24h/i.test(u) || (parseUnitWindow(u) && parseUnitWindow(u).start === parseUnitWindow(u).end)) units24.add(u);
  });

  html += `<div class="cal-dd-actions">`;
  html += `<button class="btn btn-sm" data-action="cal-add-dia" data-cal-day="${day}" data-cal-month="${month}" data-cal-year="${year}" style="flex:1;">＋ Día</button>`;
  html += `<button class="btn btn-sm" data-action="cal-add-noche" data-cal-day="${day}" data-cal-month="${month}" data-cal-year="${year}" style="flex:1;">＋ Noche</button>`;
  html += `</div>`;
  detail.innerHTML = html;
}

function calendarTargetDate() {
  if (!calendarSelectedDay) {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth(), day: now.getDate() };
  }
  return calendarSelectedDay;
}

// Open record modal pre-set to this calendar day + shift
function addCalendarShift(shiftKind) {
  const { year, month, day } = calendarTargetDate();
  const dateStr = `${String(day).padStart(2,'0')}/${String(month+1).padStart(2,'0')}/${year}`;
  closeModal('calendarModal');
  setTimeout(() => {
    document.getElementById('editingRecordId').value = '';
    document.getElementById('modalTitle').innerText = shiftKind === 'noche' ? '🌙 Añadir turno NOCHE' : '☀️ Añadir turno DÍA';
    document.getElementById('recWorker').value = '';
    document.getElementById('recCovering').value = '';
    document.getElementById('recReason').value = shiftKind === 'noche' ? 'Cobertura por baja' : 'Horas extras asignadas';
    document.getElementById('recHours').value = 12;
    const parts = dateStr.split('/');
    document.getElementById('recDate').value = `${parts[2]}-${parts[1]}-${parts[0]}`;
    // Pick best-matching 24h unit (first with 24h), else keep index 0
    const sel = document.getElementById('recUnit');
    const opts = Array.from(sel.options);
    const unit24 = opts.findIndex(o => /24h/i.test(o.value));
    if (unit24 >= 0) sel.selectedIndex = unit24;
    else sel.selectedIndex = 0;
    sel.dispatchEvent(new Event('change', { bubbles: true }));
    document.getElementById('recShift').value = shiftKind;
    updateShiftUi(shiftKind, { keepExplicit: true });
    openModal('recordModal');
    setTimeout(() => {
      const w = document.getElementById('recWorker');
      if (w) w.focus();
    }, 150);
  }, 200);
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
    const [, year, month] = filter.split('_');
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
    const [, year, month] = filter.split('_');
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
  const filterText = ((document.getElementById('workerFilterInput') || {}).value || '').toLowerCase().trim();
  const visiblePairs = units[unitIdx].workers
    .map((w, wIdx) => ({ w, wIdx }))
    .filter(p => !filterText || p.w.toLowerCase().includes(filterText));
  if (visiblePairs.length === 0) {
    container.innerHTML = '<div style="padding:16px;color:var(--muted);text-align:center;">Sin coincidencias</div>';
    return;
  }
  visiblePairs.forEach(({ w, wIdx }) => {
    container.innerHTML += `
      <div class="worker-item">
        <span style="font-size:13px;">${escHtml(w)}</span>
        <button class="btn btn-sm btn-danger" data-action="remove-worker" data-unit-idx="${unitIdx}" data-worker-idx="${wIdx}" aria-label="Eliminar trabajador ${escHtml(w)}">✕</button>
      </div>`;
  });
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
  initUnitFilter();
  initDatalists();
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
  const data = { version: '1.1', exportedAt: new Date().toISOString(), count: records.length, records, units: getUnits() };
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
      records = data.records.map(normalizeRecord);
      saveRecords();
      if (Array.isArray(data.units) && data.units.length > 0) {
        saveUnits(data.units);
        initUnitFilter();
        initDatalists();
      }
      currentPage = 1;
      coverageOnlyFilter = false;
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
  const totals = computeTotals(records);
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
  html += `<div style="background:#f1f5f9;padding:12px;border-radius:8px;flex:1"><span style="font-size:11px;color:#64748b">TOTAL HORAS EXTRAS</span><br><b style="font-size:18px;color:#0284c7">${totals.totalHours}h</b></div>`;
  html += `<div style="background:#f1f5f9;padding:12px;border-radius:8px;flex:1"><span style="font-size:11px;color:#64748b">TRABAJADORES ACTIVOS</span><br><b style="font-size:18px">${totals.workers}</b></div>`;
  html += `<div style="background:#f1f5f9;padding:12px;border-radius:8px;flex:1"><span style="font-size:11px;color:#64748b">TOTAL COBERTURAS</span><br><b style="font-size:18px">${totals.covers}</b></div>`;
  html += `</div>`;
  html += `<table style="width:100%;border-collapse:collapse;font-size:11px;margin-top:10px" border="1" borderColor="#cbd5e1" cellpadding="6">`;
  html += `<thead style="background:#0284c7;color:#ffffff"><tr><th style="padding:8px">Trabajador (Sustituto)</th><th style="padding:8px">Fecha</th><th style="padding:8px">Unidad</th><th style="padding:8px">A Quien Cubre</th><th style="padding:8px">Horas</th><th style="padding:8px">Motivo / Nota</th></tr></thead><tbody>`;
  records.forEach(r => {
    html += `<tr><td style="padding:6px;font-weight:bold">${escHtml(r.worker)}</td><td style="padding:6px">${escHtml(r.date)}</td><td style="padding:6px">${escHtml((r.unit || '').split(' - ')[0])}</td><td style="padding:6px">${escHtml(r.covering)}</td><td style="padding:6px;font-weight:bold;color:#0284c7">+${parseFloat(r.hours) || 0}h</td><td style="padding:6px">${escHtml(r.reason)}</td></tr>`;
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
  generatePDF(opt, pdfDiv, to, subject, totals);
}

async function generatePDF(opt, pdfDiv, to, subject, totals) {
  const pdfWorker = html2pdf().set(opt).from(pdfDiv);
  if (navigator.canShare) {
    try {
      const pdfBlob = await pdfWorker.output('blob');
      const file = new File([pdfBlob], opt.filename, { type: 'application/pdf' });
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'Informe de Horas Extras y Coberturas PDF',
          text: `Adjunto informe oficial de horas extras (${totals.totalHours}h).`
        });
        return;
      }
    } catch (err) { console.log('Web share skipped', err); }
  }
  pdfWorker.save();
  const mailtoBody = encodeURIComponent(`Hola,\n\nTe adjunto el informe oficial en PDF "${opt.filename}" recién descargado en el dispositivo.\n\nResumen:\n- Total Horas Extras: ${totals.totalHours}h\n- Trabajadores Activos: ${totals.workers}\n\nUn saludo.`);
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
    if (data.records) { records = data.records.map(normalizeRecord); saveRecords(); }
    if (data.units) saveUnits(data.units);
    initUnitFilter();
    initDatalists();
    currentPage = 1;
    coverageOnlyFilter = false;
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
  'cycle-fab-position': () => {
    const cur = localStorage.getItem(FAB_POS_KEY) || 'right';
    const next = cur === 'right' ? 'left' : cur === 'left' ? 'center' : 'right';
    setFabPosition(next);
  },
  'cycle-font-size': () => {
    const cur = localStorage.getItem(FS_KEY) || 'md';
    const next = cur === 'md' ? 'lg' : cur === 'lg' ? 'xl' : 'md';
    setFontSize(next);
    showToastMsg(`Tamaño letra: ${next === 'md' ? 'Normal' : next === 'lg' ? 'Grande' : 'Muy grande'}`, 'info');
  },
  'toggle-vehiculos': () => toggleVehiculos(),
  'open-vehiculos': () => openVehiculosModal(),
  'vehiculos-cover': (el) => openVehiculosCover(el.dataset.unitKey),
  'vehiculos-view': (el) => openVehiculosView(el.dataset.unitKey),
  'cal-add-dia': () => addCalendarShift('dia'),
  'cal-add-noche': () => addCalendarShift('noche'),
  'cal-today': () => {
    const now = new Date();
    calendarYear = now.getFullYear();
    calendarMonth = now.getMonth();
    calendarSelectedDay = null;
    renderCalendar();
    haptic(10);
  },
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
  if (id === 'searchInput' || id === 'monthFilter' || id === 'unitFilter' || id === 'summaryMonthFilter' || id === 'manageUnitSelect' || id === 'workerFilterInput' || id === 'vehiculosDay') {
    if (id === 'manageUnitSelect' || id === 'workerFilterInput') renderWorkersList();
    else if (id === 'vehiculosDay') renderVehiculos();
    else {
      if (id !== 'summaryMonthFilter') coverageOnlyFilter = false;
      currentPage = 1;
      renderWorkerSummary();
      if (id !== 'summaryMonthFilter') render();
    }
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

// Action sheet actions
document.addEventListener('click', (e) => {
  const sheetBtn = e.target.closest('[data-action^="sheet-"]');
  if (!sheetBtn) return;
  e.preventDefault();
  const action = sheetBtn.dataset.action;
  if (action === 'sheet-close') { closeActionSheet(); return; }
  if (!actionSheetTargetId) { closeActionSheet(); return; }
  if (action === 'sheet-edit') editRecord(actionSheetTargetId);
  if (action === 'sheet-duplicate') duplicateRecord(actionSheetTargetId);
  if (action === 'sheet-delete') deleteRecord(actionSheetTargetId);
  closeActionSheet();
});

// Tap on the overlay (outside the sheet) closes it
document.addEventListener('click', (e) => {
  const overlay = document.getElementById('actionSheet');
  if (!overlay || !overlay.classList.contains('show')) return;
  if (e.target === overlay) closeActionSheet();
}, true);

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

// FAB menu actions (delegation)
document.addEventListener('click', (e) => {
  const fabBtn = e.target.closest('#fabMenu [data-action]');
  if (!fabBtn) return;
  e.preventDefault();
  document.getElementById('fabMenu').classList.remove('show');
  if (fabBtn.dataset.action === 'open-record-direct') openRecordModalWith('direct');
  else if (fabBtn.dataset.action === 'open-record-coverage') openRecordModalWith('coverage');
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
      if (!r || !r.date) return sum;
      const parts = r.date.split('/');
      if (parts.length === 3 && parseInt(parts[1]) === monthNum && parseInt(parts[2]) === year) {
        return sum + (parseFloat(r.hours) || 0);
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
// Vista Vehículos / Dotación (experimental, gated by feature flag)
// ========================
let vehiculosDay = todayLocalISO();
function openVehiculosModal() {
  if (!getVehiculosEnabled()) {
    showToastMsg('Activa "Vista vehículos" en ⚙️ Gestionar.', 'warning');
    return;
  }
  const dayInput = document.getElementById('vehiculosDay');
  if (dayInput && !dayInput.value) dayInput.value = vehiculosDay;
  if (dayInput) dayInput.value = vehiculosDay;
  renderVehiculos();
  openModal('vehiculosModal');
}

function renderVehiculos() {
  const dayInput = document.getElementById('vehiculosDay');
  if (dayInput) vehiculosDay = dayInput.value || todayLocalISO();
  // Aggregate records of the chosen day per unit
  const dayDate = vehiculosDay;
  // Convert YYYY-MM-DD to DD/MM/YYYY to match r.date format
  let parts = dayDate.split('-');
  let dayES = parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : dayDate;
  const todayRecords = records.filter(r => r && r.date === dayES);
  const byUnit = {};
  todayRecords.forEach(r => {
    const u = r.unit || '';
    if (!byUnit[u]) byUnit[u] = [];
    byUnit[u].push(r);
  });
  const units = getUnits();
  const totalUnits = units.length;
  const totalCovered = units.filter(u => (byUnit[u.unit] || []).length > 0).length;
  const sinDotacion = units.filter(u => (byUnit[u.unit] || []).length === 0).length;
  const statsEl = document.getElementById('vehiculosStats');
  if (statsEl) {
    statsEl.innerHTML = `
      <div class="vstat"><span>Unidades</span><b>${totalUnits}</b></div>
      <div class="vstat"><span>Con dotación</span><b>${totalCovered}</b></div>
      <div class="vstat alert"><span>Sin cubrir</span><b>${sinDotacion}</b></div>
    `;
  }
  const listEl = document.getElementById('vehiculosList');
  if (!listEl) return;
  if (!units.length) {
    listEl.innerHTML = '<div style="padding:16px;color:var(--muted);text-align:center;">No hay unidades definidas. Ve a 👥 Trabajadores / Unidades.</div>';
    return;
  }
  listEl.innerHTML = '';
  units.forEach(u => {
    const items = (byUnit[u.unit] || []).slice().sort((a, b) => {
      // Sort by date-ish already same; sort by worker name then hours
      const aw = (a.worker || '').localeCompare(b.worker || '', 'es-ES');
      if (aw) return aw;
      return (parseFloat(a.hours) || 0) - (parseFloat(b.hours) || 0);
    });
    const totalHoras = items.reduce((s, r) => s + (parseFloat(r.hours) || 0), 0);
    const coberturas = items.filter(r => r.covering && !String(r.covering).includes('N/A')).length;
    const directas = items.length - coberturas;
    const dotacionTotal = u.workers.length;
    const libres = dotacionTotal - items.length;
    let pillClass = 'libres';
    let pillText = `${libres} libres`;
    if (items.length === 0) { pillClass = 'libres'; pillText = 'Sin dotar'; }
    else if (libres === 0) { pillClass = 'cubierta'; pillText = 'Cubierta'; }
    else if (libres <= 2) { pillClass = 'cobertura'; pillText = `${libres} libres`; }
    else { pillClass = 'libres'; pillText = `${libres} libres`; }
    let cardClass = 'vehiculo-card';
    if (items.length === 0) cardClass += ' sin-cobertura';
    else if (libres > 0) cardClass += ' parcial';
    else cardClass += ' cubierta';
    const shortName = escHtml((u.unit || '').split(' - ')[0] || u.unit);
    // Group items by shift for nicer reading
    const byShift = { dia: [], noche: [], '24': [], '': [] };
    items.forEach(r => {
      const hrs = parseFloat(r.hours) || 0;
      const isCov = r.covering && !String(r.covering).includes('N/A');
      const shift = r.shift || inferShift(r.unit, hrs, '');
      byShift[(byShift[shift] ? shift : '')].push({ r, hrs, isCov, shift });
    });

    // Boolean: day + night turns both present
    const isSplit24 = !!(byShift.dia.length && byShift.noche.length);
    if (isSplit24 && pillText === 'Cubierta') pillText = 'D + N cubiertas';
    const renderGroup = (key, label, icon) => {
      const arr = byShift[key];
      if (!arr.length) return '';
      return `<div class="vc-group">
        <div class="vc-group-title"><span>${icon}</span> ${escHtml(label)} <small>${arr.length}</small></div>
        ${arr.map(({ r, hrs, isCov }) => {
          const aria = isCov ? '🔄 ' : '';
          return `<div class="vc-t ${isCov ? 'cobertura' : ''}">
            <span class="who">${aria}${escHtml(r.worker || '')}</span>
            <span class="hrs">${hrs > 0 ? '+'+hrs+'h' : '—'}</span>
          </div>`;
        }).join('')}
      </div>`;
    };
    const listItems = items.length === 0
      ? '<div class="vc-empty">Sin asignaciones para hoy.</div>'
      : renderGroup('dia', 'Día', '☀️')
        + renderGroup('noche', 'Noche', '🌙')
        + renderGroup('24', '24h', '🕓')
        + renderGroup('', 'Otros', '—');
    const missing = libres > 0
      ? `<div class="vc-missing">⚠️ Faltan ${libres} plazas para cubrir esta unidad.</div>`
      : '';
    const card = document.createElement('div');
    card.className = cardClass;
    card.innerHTML = `
      <div class="vc-head">
        <div>
          <div class="vc-name">${shortName}</div>
          <div class="vc-short-id">${totalHoras > 0 ? `+${totalHoras}h hoy` : 'Sin horas'}</div>
        </div>
        <span class="vc-pill ${pillClass}">${pillText}</span>
      </div>
      <div class="vc-meta">
        <b>${directas}</b> directas
        <b>·</b>
        <b>${coberturas}</b> coberturas
        <b>·</b>
        Dotación <b>${dotacionTotal}</b>
      </div>
      <div class="vc-list">${listItems}</div>
      ${missing}
      <div class="vc-actions">
        <button class="btn" data-action="vehiculos-view" data-unit-key="${escHtml(u.unit)}">👁 Ver</button>
        <button class="btn btn-primary" data-action="vehiculos-cover" data-unit-key="${escHtml(u.unit)}">＋ Cubrir</button>
      </div>
    `;
    listEl.appendChild(card);
  });
}

function openVehiculosCover(unitKey) {
  // Pre-populate record modal with this unit, today date, prefilled reason
  const unitObj = getUnits().find(u => u.unit === unitKey);
  if (!unitObj) return;
  // Close the vehiculos modal first for a cleaner flow
  closeModal('vehiculosModal');
  setTimeout(() => {
    document.getElementById('editingRecordId').value = '';
    document.getElementById('modalTitle').innerText = '＋ Cubrir plaza — ' + unitObj.unit.split(' - ')[0];
    document.getElementById('recWorker').value = '';
    const uSel = document.getElementById('recUnit');
    for (let i = 0; i < uSel.options.length; i++) {
      if (uSel.options[i].value === unitKey) { uSel.selectedIndex = i; break; }
    }
    document.getElementById('recCovering').value = '';
    document.getElementById('recReason').value = 'Cobertura por baja';
    document.getElementById('recHours').value = 12;
    document.getElementById('recDate').value = vehiculosDay || todayLocalISO();
    populateAllWorkersDatalists();
    openModal('recordModal');
    setTimeout(() => {
      const w = document.getElementById('recWorker');
      if (w) w.focus();
    }, 150);
  }, 200);
}

function openVehiculosView(unitKey) {
  // Show records of the unit for day in the table-card (filter)
  const dayInput = document.getElementById('vehiculosDay');
  const day = (dayInput && dayInput.value) || vehiculosDay;
  const parts = day.split('-');
  const dayES = parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : day;
  closeModal('vehiculosModal');
  document.getElementById('monthFilter').value = 'all';
  document.getElementById('unitFilter').value = unitKey;
  document.getElementById('searchInput').value = dayES;
  currentPage = 1;
  coverageOnlyFilter = false;
  render();
  showToastMsg(`Mostrando registros de ${unitKey.split(' - ')[0]} el ${dayES}`, 'info');
  window.scrollTo({ top: document.querySelector('.table-card')?.offsetTop - 80 || 0, behavior: 'smooth' });
}

// ========================
// One-hand UX extras
// ========================

// Online / offline indicator
function updateOnlineStatus() {
  const banner = document.getElementById('offlineBanner');
  if (!banner) return;
  const online = navigator.onLine;
  banner.classList.toggle('show', !online);
  if (!online) haptic([40, 60, 40]);
}
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Pull-to-refresh (Android-native gesture)
let ptrTouchY = 0;
let ptrActive = false;
function initPullToRefresh() {
  const indicator = document.getElementById('ptrIndicator');
  window.addEventListener('touchstart', (e) => {
    if (window.scrollY > 0) return;
    ptrTouchY = e.touches[0].clientY;
    ptrActive = true;
  }, { passive: true });
  window.addEventListener('touchmove', (e) => {
    if (!ptrActive) return;
    const dy = e.touches[0].clientY - ptrTouchY;
    if (dy > 0 && window.scrollY === 0) {
      if (dy > 80) {
        if (indicator) {
          indicator.classList.add('show');
          indicator.textContent = '↻ Suelta para refrescar';
        }
      }
    }
  }, { passive: true });
  window.addEventListener('touchend', (e) => {
    if (!ptrActive) return;
    const dy = (e.changedTouches[0].clientY - ptrTouchY);
    if (dy > 80 && window.scrollY === 0) {
      if (indicator) indicator.textContent = '⟳ Actualizando…';
      setTimeout(() => {
        render();
        if (indicator) { indicator.classList.remove('show'); }
        haptic(20);
        showToastMsg('Lista actualizada.', 'info');
      }, 300);
    } else {
      if (indicator) indicator.classList.remove('show');
    }
    ptrActive = false;
    ptrTouchY = 0;
  });
}

// Visual viewport: keep focused input above the on-screen keyboard
function initVisualViewportHandlers() {
  if (!window.visualViewport) return;
  const handler = () => {
    const focused = document.activeElement;
    if (!focused || !focused.closest('.modal.open')) return;
    if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA' && document.activeElement.tagName !== 'SELECT') return;
    setTimeout(() => {
      const rect = focused.getBoundingClientRect();
      const bottom = window.visualViewport.offsetTop + window.visualViewport.height;
      if (rect.bottom > bottom - 60) {
        focused.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    }, 50);
  };
  window.visualViewport.addEventListener('resize', handler);
}

// Long-press action sheet on table rows
let actionSheetTargetId = null;
let longPressTimer = null;
function openActionSheet(recordId) {
  actionSheetTargetId = recordId;
  const sheet = document.getElementById('actionSheet');
  if (!sheet) return;
  sheet.classList.add('show');
  sheet.setAttribute('aria-hidden', 'false');
  haptic([15, 30, 15]);
}
function closeActionSheet() {
  const sheet = document.getElementById('actionSheet');
  if (!sheet) return;
  sheet.classList.remove('show');
  sheet.setAttribute('aria-hidden', 'true');
  actionSheetTargetId = null;
}

function handleLongPress(e) {
  const tr = e.target.closest('[data-long-press]');
  if (!tr) return;
  e.preventDefault();
  openActionSheet(parseInt(tr.dataset.recordId, 10));
}
function bindLongPress() {
  const tbody = document.getElementById('recordsTbody');
  if (!tbody) return;
  // Use click for fallback; long-press via timer with touch events
  tbody.addEventListener('touchstart', (e) => {
    const tr = e.target.closest('tr[data-record-id]');
    if (!tr) return;
    longPressTimer = setTimeout(() => {
      openActionSheet(parseInt(tr.dataset.recordId, 10));
      longPressTimer = null;
    }, 550);
  }, { passive: true });
  tbody.addEventListener('touchend', () => {
    if (longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null; }
  });
  tbody.addEventListener('touchmove', () => {
    if (longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null; }
  }, { passive: true });
  tbody.addEventListener('contextmenu', handleLongPress);
  // Tap on row opens detail (not edit) on mobile to avoid accidental mis-edit
  tbody.addEventListener('click', (e) => {
    const actionBtn = e.target.closest('[data-action]');
    const tr = e.target.closest('tr[data-record-id]');
    if (!tr) return;
    if (actionBtn) return;
    if (window.matchMedia('(max-width: 640px)').matches) {
      openActionSheet(parseInt(tr.dataset.recordId, 10));
    }
  });
}

// Hours stepper (mobile-quick add/sub)
function bindHoursStepper() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.hours-stepper button[data-step]');
    if (!btn) return;
    const step = parseFloat(btn.dataset.step);
    const input = document.getElementById('recHours');
    if (!input) return;
    const cur = parseFloat(input.value) || 0;
    const next = Math.max(0.5, Math.min(24, Math.round((cur + step) * 2) / 2));
    input.value = next;
    haptic(8);
  });
}

// FAB press-and-hold menu
function bindFabLongPress() {
  const fab = document.querySelector('.fab');
  const menu = document.getElementById('fabMenu');
  if (!fab || !menu) return;
  let timer = null;
  const start = (e) => {
    timer = setTimeout(() => {
      menu.classList.add('show');
      haptic([10, 30, 10]);
      timer = null;
    }, 450);
  };
  const cancel = () => { if (timer) { clearTimeout(timer); timer = null; } };
  fab.addEventListener('touchstart', start, { passive: true });
  fab.addEventListener('touchend', cancel);
  fab.addEventListener('touchmove', cancel);
  // Long-press on desktop: contextmenu
  fab.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    menu.classList.add('show');
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.fab') && !e.target.closest('#fabMenu') && menu.classList.contains('show')) {
      menu.classList.remove('show');
    }
  });
}

// Open record modal with prefilled type
function openRecordModalWith(kind) {
  document.getElementById('editingRecordId').value = '';
  document.getElementById('modalTitle').innerText = kind === 'coverage'
    ? '🔄 Registrar Cobertura'
    : '🆕 Registrar Hora Extra';
  document.getElementById('recWorker').value = '';
  document.getElementById('recUnit').selectedIndex = 0;
  document.getElementById('recCovering').value = kind === 'coverage' ? '' : '';
  document.getElementById('recReason').value = kind === 'coverage' ? 'Cobertura por baja' : 'Horas extras asignadas';
  document.getElementById('recHours').value = 12;
  document.getElementById('recDate').value = todayLocalISO();
  filterWorkersByUnit();
  // For "coverage" open, after fill, set a sensible default covering input placeholder as emphasis
  if (kind === 'coverage') {
    const cov = document.getElementById('recCovering');
    if (cov) cov.required = false;
  }
  openModal('recordModal');
  // highlight covering input by focusing after open
  if (kind === 'coverage') {
    setTimeout(() => {
      const cov = document.getElementById('recCovering');
      if (cov) cov.focus();
    }, 120);
  }
}

// Duplicate record (kept at bottom)
function duplicateRecord(id) {
  const r = records.find(x => x.id === id);
  if (!r) return;
  const copy = normalizeRecord({
    ...r,
    id: undefined,
    covering: 'N/A (Extra Directa)',
    reason: (r.reason || '').includes('(duplicado)') ? r.reason : `${r.reason} (duplicado)`,
    createdAt: new Date().toLocaleString('es-ES')
  });
  records.unshift(copy);
  saveRecords();
  currentPage = 1;
  markEdited();
  render();
  showToastMsg('Registro duplicado.', 'success');
  haptic(15);
}

// Horizontal swipe between tab views (mobile)
const SWIPE_NAV = ['open-record-modal', 'open-calendar', 'open-charts', 'open-worker-summary'];
function bindHorizontalSwipe() {
  let sx = 0, sy = 0, dist = 0, t = null;
  document.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    sx = e.touches[0].clientX;
    sy = e.touches[0].clientY;
    dist = 0;
    t = Date.now();
  }, { passive: true });
  document.addEventListener('touchend', (e) => {
    if (sx === 0) return;
    const ex = e.changedTouches[0].clientX;
    const ey = e.changedTouches[0].clientY;
    const dx = ex - sx;
    const dy = ey - sy;
    const dt = Date.now() - (t || 0);
    sx = sy = 0;
    // Only when swipe is more horizontal than vertical and is long enough and fast
    if (dt > 600) return;
    if (Math.abs(dx) < 80 || Math.abs(dx) < Math.abs(dy)) return;
    if (window.matchMedia && window.matchMedia('(min-width: 641px)').matches) return;
    if (dx < 0) {
      // Left swipe → next view
      cyclePrevView(1);
    } else {
      // Right swipe → previous view
      cyclePrevView(-1);
    }
  });
}
function cyclePrevView(dir) {
  // Find which view is currently visible (any of the modals open)
  const open = SWIPE_NAV.find(a => {
    const id = a === 'open-record-modal' ? 'recordModal'
      : a === 'open-calendar' ? 'calendarModal'
      : a === 'open-charts' ? 'chartsModal'
      : a === 'open-worker-summary' ? 'workerSummaryModal' : null;
    return id && document.getElementById(id)?.classList.contains('open');
  });
  if (open) return; // only cycle on dashboard
  // Cycle between Dashboard, Calendar, Charts, Summary
  const order = ['open-calendar', 'open-charts', 'open-worker-summary'];
  // Soft hint: lightweight swipe next view → just open calendar or charts
  const target = dir === 1 ? 'open-charts' : 'open-calendar';
  if (order.includes(target)) {
    if (target === 'open-calendar') openCalendarModal();
    if (target === 'open-charts') openChartsModal();
  }
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
              newWorker.postMessage({ action: 'SKIP_WAITING' });
            }
          });
        });
      })
      .catch(err => console.log('SW registration error:', err));
    navigator.serviceWorker.addEventListener('message', (e) => {
      if (e.data && e.data.type === 'SW_UPDATED') {
        showToastMsg('Nueva versión disponible. Pulsa para actualizar.', 'info');
      }
    });
    navigator.serviceWorker.addEventListener('controllerchange', () => location.reload());
  });
}

// ========================
// Init
// ========================
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#registrar') {
    openRecordModal();
    try { history.replaceState(null, '', window.location.pathname + window.location.search); } catch (e) {}
  }
});

document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  applyFabPosition();
  applyFontSize();
  applyVehiculosVisibility();
  initDatalists();
  initMonthFilter();
  initUnitFilter();
  render();
  document.getElementById('recUnit').addEventListener('change', filterWorkersByUnit);
  initAutoBackup();
  bindLongPress();
  bindHoursStepper();
  bindShiftToggle();
  bindFabLongPress();
  initPullToRefresh();
  initVisualViewportHandlers();
  updateOnlineStatus();
  // Swipe gestures between Dashboard / Calendario / Gráficos / Resumen
  bindHorizontalSwipe();
  if (window.location.hash === '#registrar') openRecordModalWith('direct');
  else if (window.location.hash === '#registrar-cobertura') openRecordModalWith('coverage');
});
