// script.js comune a tutte le pagine

function saveIspezione() {
  const ispezioni = JSON.parse(localStorage.getItem('ispezioni') || '[]');
  const nuova = {
    nome: document.getElementById('nome').value.trim(),
    luogo: document.getElementById('luogo').value.trim(),
    data: document.getElementById('data').value,
    telai: document.getElementById('telai').value,
    regina: document.getElementById('regina').checked,
    covata: document.getElementById('covata').checked,
    melario: document.getElementById('melario').checked,
    candito: document.getElementById('candito').checked,
    note: document.getElementById('note').value.trim()
  };
  ispezioni.push(nuova);
  localStorage.setItem('ispezioni', JSON.stringify(ispezioni));
  alert('Ispezione salvata!');
  location.href = 'view.html';
}

function loadIspezioni() {
  const container = document.getElementById('ispezioniContainer');
  if (!container) return;
  const ispezioni = JSON.parse(localStorage.getItem('ispezioni') || '[]');
  if (ispezioni.length === 0) {
    container.innerHTML = "<p>Nessuna ispezione salvata.</p>";
    return;
  }
  container.innerHTML = '';
  ispezioni.forEach((isp, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<strong>Arnia:</strong> ${isp.nome}<br>
      <strong>Luogo:</strong> ${isp.luogo}<br>
      <strong>Data:</strong> ${isp.data}<br>
      <strong>Telai:</strong> ${isp.telai}<br>
      <strong>Regina:</strong> ${isp.regina ? 'Sì' : 'No'}<br>
      <strong>Covata:</strong> ${isp.covata ? 'Sì' : 'No'}<br>
      <strong>Melario:</strong> ${isp.melario ? 'Sì' : 'No'}<br>
      <strong>Candito:</strong> ${isp.candito ? 'Sì' : 'No'}<br>
      <strong>Note:</strong> ${isp.note}<br>
      <button onclick="removeIspezione(${i})">Rimuovi</button>`;
    container.appendChild(card);
  });
}

function removeIspezione(i) {
  const ispezioni = JSON.parse(localStorage.getItem('ispezioni') || '[]');
  ispezioni.splice(i, 1);
  localStorage.setItem('ispezioni', JSON.stringify(ispezioni));
  loadIspezioni();
}

loadIspezioni();
