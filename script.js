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
  location.href = 'index.html';
}

function loadIspezioni() {
  const container = document.getElementById('ispezioniContainer');
  if (!container) return;
  const ispezioni = JSON.parse(localStorage.getItem('ispezioni') || '[]');
  const gruppi = {};
  ispezioni.forEach((isp, i) => {
    if (!gruppi[isp.luogo]) gruppi[isp.luogo] = [];
    gruppi[isp.luogo].push({ ...isp, i });
  });
  if (ispezioni.length === 0) {
    container.innerHTML = "<p>Nessuna ispezione salvata.</p>";
    return;
  }
  container.innerHTML = '';
  for (const luogo in gruppi) {
    const div = document.createElement('div');
    div.className = 'group';
    const titolo = document.createElement('h3');
    titolo.textContent = 'Luogo: ' + luogo;
    div.appendChild(titolo);
    gruppi[luogo].forEach(isp => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<strong>Arnia:</strong> ${isp.nome}<br>
        <strong>Data:</strong> ${isp.data}<br>
        <strong>Telai:</strong> ${isp.telai}<br>
        <strong>Regina:</strong> ${isp.regina ? 'Sì' : 'No'}<br>
        <strong>Covata:</strong> ${isp.covata ? 'Sì' : 'No'}<br>
        <strong>Melario:</strong> ${isp.melario ? 'Sì' : 'No'}<br>
        <strong>Candito:</strong> ${isp.candito ? 'Sì' : 'No'}<br>
        <strong>Note:</strong> ${isp.note}<br>`;
      div.appendChild(card);
    });
    container.appendChild(div);
  }
}

loadIspezioni();
